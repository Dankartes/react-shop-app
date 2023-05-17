import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NoProducts from './NoProducts';

const ShopPagination = ({ count, pageSize, currentPage }) => {
  const navigate = useNavigate();

  const pageChangeHandler = (event, page) => {
    navigate(`/products/${page}`);
  };

  return (
    <>
      {currentPage <= Math.ceil(count / pageSize) ? (
        <Pagination
          color="primary"
          style={{ marginTop: '10px' }}
          count={Math.ceil(count / pageSize)}
          onChange={pageChangeHandler}
          defaultPage={1}
          page={+currentPage}
        />
      ) : (
        <NoProducts />
      )}
    </>
  );
};

export default ShopPagination;

// old loader code
// export const loader = async ({ params, request }) => {
//   const url = new URL(request.url);
//   const productName = url.searchParams.get('name');
//   const minPrice = +url.searchParams.get('min-price');
//   const maxPrice = +url.searchParams.get('max-price');

//   const page = params.pageNumber;

//   const from = (page - 1) * pageSize;
//   const to = (page - 1) * pageSize + pageSize;

//   try {
//     const response = await fetch(
//       'https://react-http-b5876-default-rtdb.europe-west1.firebasedatabase.app/products.json'
//     );
//     const data = await response.json();

//     let newProducts = [];

//     for (const [key, product] of Object.entries(data))
//       newProducts.unshift({
//         id: key,
//         name: product.name,
//         price: product.price,
//         description: product.description,
//         image: product.image,
//       });

//     if (productName)
//       newProducts = newProducts.filter(product =>
//         product.name.toLowerCase().includes(productName.toLowerCase())
//       );

//     if (minPrice && maxPrice) {
//       newProducts = newProducts.filter(
//         product => +product.price >= minPrice && +product.price <= maxPrice
//       );
//     }

//     // if (page > Math.ceil(newProducts.length / pageSize)) return;

//     const slicedNewProducts = newProducts.slice(from, to);

//     return {
//       products: slicedNewProducts,
//       count: newProducts.length,
//     };
//   } catch (error) {
//     throw json(
//       { message: 'could not fetch products' },
//       {
//         status: 500,
//       }
//     );
//   }
// };
