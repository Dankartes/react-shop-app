import {
  Card,
  Button,
  TextField,
  Grid,
  CardContent,
  CardActions,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { addNewProductThunk } from '../store/Products/products-actions';
import toBase64 from '../functions/toBase64';
import { openDialogBox } from '../store/Dialog/dialog-slice';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { categories } from '../components/Products/ProductsFilter';
import { useReducer } from 'react';

const acceptedImageTypes = ['image/jpeg', 'image/png'];

const initialValState = {
  nameVal: { error: false, message: '' },
  priceVal: { error: false, message: '' },
  categoryVal: { error: false, message: '' },
  descriptionVal: { error: false, message: '' },
  imageVal: { error: false, message: '' },
};

const validationsReducer = (state, action) => {
  switch (action.type) {
    case 'NAME_INVAL':
      return {
        ...state,
        nameVal: { error: true, message: 'Name must not be empty!' },
      };
    case 'PRICE_INVAL':
      return {
        ...state,
        priceVal: { error: true, message: 'Price must not be empty!' },
      };

    case 'CATEGORY_INVAL':
      return {
        ...state,
        categoryVal: { error: true, message: 'Category must not be empty!' },
      };

    case 'DESCR_INVAL':
      return {
        ...state,
        descriptionVal: {
          error: true,
          message: 'Description must not be empty!',
        },
      };

    case 'IMG_INVAL':
      return {
        ...state,
        imageVal: {
          error: true,
          message: 'You must upload an jpg/png image!',
        },
      };

    case 'RESET':
      return {
        ...state,
        [action.fieldVal]: {
          error: false,
          message: '',
        },
      };

    default:
      return initialValState;
  }
};

const AddProduct = () => {
  const [validations, dispatchVal] = useReducer(
    validationsReducer,
    initialValState
  );

  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const inputImageRef = useRef();
  const inputDescriptionRef = useRef();
  const inputCategoryRef = useRef();

  const dispatch = useDispatch();
  const [imageName, setImageName] = useState('');

  const setImageNameHandler = event => {
    setImageName(event.target.files[0].name);
    dispatchVal({ type: 'RESET', fieldVal: 'imageVal' });
  };

  const nameRemoveValHandler = () => {
    dispatchVal({ type: 'RESET', fieldVal: 'nameVal' });
  };
  const priceRemoveValHandler = () => {
    dispatchVal({ type: 'RESET', fieldVal: 'priceVal' });
  };

  const categoryRemoveValHandler = () => {
    dispatchVal({ type: 'RESET', fieldVal: 'categoryVal' });
  };

  const descrRemoveValHandler = () => {
    dispatchVal({ type: 'RESET', fieldVal: 'descriptionVal' });
  };

  const submitHandler = async event => {
    event.preventDefault();

    const enteredImageFile = inputImageRef.current.files[0];
    const enteredName = inputNameRef.current.value;
    const enteredPrice = inputPriceRef.current.value;
    const enteredDescription = inputDescriptionRef.current.value;
    const enteredCategoryId = inputCategoryRef.current.value;

    let formIsValid = true;

    if (!enteredName) {
      dispatchVal({ type: 'NAME_INVAL' });
      formIsValid = false;
    }
    if (!enteredPrice) {
      dispatchVal({ type: 'PRICE_INVAL' });
      formIsValid = false;
    }
    if (!enteredCategoryId) {
      dispatchVal({ type: 'CATEGORY_INVAL' });
      formIsValid = false;
    }
    if (!enteredDescription) dispatchVal({ type: 'DESCR_INVAL' });
    if (
      !enteredImageFile ||
      !acceptedImageTypes.includes(enteredImageFile.type)
    ) {
      dispatchVal({ type: 'IMG_INVAL' });
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        const enteredImage = await toBase64(enteredImageFile);
        dispatch(
          addNewProductThunk({
            name: enteredName,
            price: enteredPrice,
            image: enteredImage,
            description: enteredDescription,
            categoryId: enteredCategoryId,
          })
        );
      } catch (error) {
        dispatch(openDialogBox('Cannot add product, please try again later!'));
      }
    }
  };

  return (
    <Card onSubmit={submitHandler} component="form" sx={{ maxWidth: 'md' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <TextField
              onChange={nameRemoveValHandler}
              type="text"
              inputRef={inputNameRef}
              id="name"
              name="name"
              label="Name"
              fullWidth
              error={validations.nameVal.error}
              helperText={validations.nameVal.message}
            />
          </Grid>

          <Grid item md={4} xs={12}>
            <TextField
              onChange={priceRemoveValHandler}
              type="number"
              inputRef={inputPriceRef}
              id="price"
              name="price"
              label="Price"
              fullWidth
              error={validations.priceVal.error}
              helperText={validations.priceVal.message}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              value=""
              onChange={categoryRemoveValHandler}
              type="text"
              select
              inputRef={inputCategoryRef}
              id="category"
              name="category"
              label="Category"
              fullWidth
              error={validations.categoryVal.error}
              helperText={validations.categoryVal.message}
            >
              {categories.map(category => (
                <MenuItem key={category.value} value={category.value}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              onChange={descrRemoveValHandler}
              type="text"
              inputRef={inputDescriptionRef}
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              fullWidth
              error={validations.descriptionVal.error}
              helperText={validations.descriptionVal.message}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <Button
              startIcon={<UploadFileIcon />}
              variant="contained"
              component="label"
              sx={{ marginRight: '5px' }}
            >
              Upload Photo
              <input
                onChange={setImageNameHandler}
                ref={inputImageRef}
                id="imageUpload"
                type="file"
                accept="image/png, image/jpeg"
                hidden
              />
            </Button>
            {validations.imageVal.error && (
              <FormHelperText sx={{ marginLeft: '14px', color: '#d32f2f' }}>
                {validations.imageVal.message}
              </FormHelperText>
            )}
            {imageName}
          </Grid>
        </Grid>
      </CardContent>

      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button type="submit" variant="outlined">
          Add product
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddProduct;

// export const action = async ({ request }) => {
//   console.log(request);
//   const data = await request.formData();

//   const submission = {
//     name: data.get('name'),
//     price: data.get('price'),
//     description: data.get('description'),
//     image: data.get('image'),
//   };

//   try {
//     await fetch(
//       'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json',
//       {
//         method: request.method,
//         'Content-Type': 'application/json',
//         body: JSON.stringify(submission),
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }

//   return redirect('/1');
// };
