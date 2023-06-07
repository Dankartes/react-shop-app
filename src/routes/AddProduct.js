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

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const changeImageHandler = async event => {
    setImageFile(event.target.files[0]);

    const imagePreview = await toBase64(event.target.files[0]);
    setImage(imagePreview);
    dispatchVal({ type: 'RESET', fieldVal: 'imageVal' });
  };

  const changeNameHandler = event => {
    setName(event.target.value);
    dispatchVal({ type: 'RESET', fieldVal: 'nameVal' });
  };
  const changePriceHandler = event => {
    setPrice(event.target.value);
    dispatchVal({ type: 'RESET', fieldVal: 'priceVal' });
  };

  const changeCategoryIdHandler = event => {
    setCategoryId(event.target.value);
    dispatchVal({ type: 'RESET', fieldVal: 'categoryVal' });
  };

  const changeDescrHandler = event => {
    setDescription(event.target.value);
    dispatchVal({ type: 'RESET', fieldVal: 'descriptionVal' });
  };

  const submitHandler = async event => {
    event.preventDefault();

    let formIsValid = true;

    if (!name) {
      dispatchVal({ type: 'NAME_INVAL' });
      formIsValid = false;
    }
    if (!price) {
      dispatchVal({ type: 'PRICE_INVAL' });
      formIsValid = false;
    }
    if (!categoryId) {
      dispatchVal({ type: 'CATEGORY_INVAL' });
      formIsValid = false;
    }
    if (!description) dispatchVal({ type: 'DESCR_INVAL' });
    if (!imageFile || !acceptedImageTypes.includes(imageFile.type)) {
      dispatchVal({ type: 'IMG_INVAL' });
      formIsValid = false;
    }

    if (formIsValid) {
      try {
        dispatch(
          addNewProductThunk({
            name,
            price,
            image,
            description,
            categoryId,
          })
        );
        setName('');
        setPrice('');
        setCategoryId('');
        setDescription('');
        setImageFile('');
        setImage('');
      } catch (error) {
        dispatch(
          openDialogBox({
            message: 'Cannot add product, please try again later!',
            title: 'Error',
          })
        );
      }
    }
  };

  return (
    <Card onSubmit={submitHandler} component="form" sx={{ maxWidth: 'md' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <TextField
              value={name}
              onChange={changeNameHandler}
              type="text"
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
              value={price}
              onChange={changePriceHandler}
              type="number"
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
              value={categoryId}
              onChange={changeCategoryIdHandler}
              type="text"
              select
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
              value={description}
              onChange={changeDescrHandler}
              type="text"
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
                onChange={changeImageHandler}
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
            {image && (
              <img
                style={{ height: 'auto', width: '150px' }}
                src={image}
                alt="product"
              />
            )}
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
