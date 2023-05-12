import styles from './AddProduct.module.css';
import { Form, redirect } from 'react-router-dom';
import { Card } from '@mui/material';

const AddProduct = () => {
  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <Card>
      <Form method="post" action="/add-product" className={styles['add-form']}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" id="name" />

        <label htmlFor="price">Price:</label>
        <input name="price" type="number" id="price" />

        <label htmlFor="image" id="image">
          Image
        </label>
        <input name="image" type="text" id="image" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description"></textarea>

        <section>
          <button>Add product</button>
        </section>
      </Form>
    </Card>
  );
};

export default AddProduct;

export const action = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    name: data.get('name'),
    price: data.get('price'),
    description: data.get('description'),
    image: data.get('image'),
  };

  try {
    await fetch(
      'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      {
        method: request.method,
        'Content-Type': 'application/json',
        body: JSON.stringify(submission),
      }
    );
  } catch (error) {
    console.log(error);
  }

  return redirect('/1');
};
