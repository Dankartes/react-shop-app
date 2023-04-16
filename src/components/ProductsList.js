import styles from './ProductsList.module.css';
import SingleProduct from './SingleProduct';

const dummy_products = [
  {
    name: 'Papuci',
    price: '25',
    description: 'Numa buni de purtat pe maini.',
  },
  {
    name: 'Cartof',
    price: '50',
    description: 'Cea mai leguma.',
  },
  {
    name: 'Camion',
    price: '5000',
    description: 'Optimus prime descriere.',
  },
  {
    name: 'Incarcator',
    price: '399',
    description: 'Descarca telefoane.',
  },
];

const ProductsList = () => {
  return dummy_products.map(product => (
    <SingleProduct
      key={product.name}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
};

export default ProductsList;
