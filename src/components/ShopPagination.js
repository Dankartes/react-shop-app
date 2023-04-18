import { Pagination } from '@mui/material';
import { json, useLoaderData, useNavigate, useParams } from 'react-router-dom';
const pageSize = 2;

const ShopPagination = () => {
  const { count } = useLoaderData();
  const navigate = useNavigate();

  const pageChangeHandler = (event, page) => {
    navigate(`/${page}`);
  };

  const { pageNumber: currentPage } = useParams();

  return (
    <Pagination
      style={{ marginTop: '10px' }}
      count={Math.ceil(count / pageSize)}
      onChange={pageChangeHandler}
      defaultPage={1}
      page={Number(currentPage)}
    />
  );
};

export default ShopPagination;

export const loader = async ({ params }) => {
  const page = params.pageNumber;
  const from = (page - 1) * pageSize;
  const to = (page - 1) * pageSize + pageSize;

  try {
    const response = await fetch(
      'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json'
    );
    const data = await response.json();

    let newProducts = [];

    for (const [key, product] of Object.entries(data))
      newProducts.unshift({
        id: key,
        name: product.name,
        price: product.price,
        description: product.description,
      });

    const slicedNewProducts = newProducts.slice(from, to);

    return {
      products: slicedNewProducts,
      count: newProducts.length,
    };
  } catch (error) {
    throw json(
      { message: 'could not fetch products' },
      {
        status: 500,
      }
    );
  }
};
