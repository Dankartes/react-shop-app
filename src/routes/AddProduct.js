import styles from './AddProduct.module.css';
import { Card } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { sendProductData } from '../store/index';

const AddProduct = () => {
  const inputNameRef = useRef();
  const inputPriceRef = useRef();
  const inputImageRef = useRef();
  const inputDescriptionRef = useRef();

  const dispatch = useDispatch();

  const submitHandler = event => {
    event.preventDefault();

    const enteredName = inputNameRef.current.value;
    const enteredPrice = inputPriceRef.current.value;
    const enteredImage = inputImageRef.current.value;
    const enteredDescription = inputDescriptionRef.current.value;

    dispatch(
      sendProductData({
        name: enteredName,
        price: enteredPrice,
        image: enteredImage,
        description: enteredDescription,
      })
    );
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles['add-form']}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" id="name" ref={inputNameRef} />

        <label htmlFor="price">Price:</label>
        <input name="price" type="number" id="price" ref={inputPriceRef} />

        <label htmlFor="image" id="image">
          Image
        </label>
        <input name="image" type="text" id="image" ref={inputImageRef} />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          ref={inputDescriptionRef}
        ></textarea>

        <section>
          <button>Add product</button>
        </section>
      </form>
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
