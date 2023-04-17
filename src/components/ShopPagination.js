import { Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
import service from '../service';

const pageSize = 6;

const ShopPagination = ({ onProductsChange }) => {
  const pageChangeHandler = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination(prevPag => {
      return { ...prevPag, from: from, to: to };
    });
  };

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then(response => {
        // console.log(response);
        // setPagination({ ...pagination, count: response.count });
        onProductsChange(response);

        setPagination(prevPag => {
          return { ...prevPag, count: response.count };
        });
      });
  }, [pagination.from, pagination.to]);

  return (
    <Pagination
      style={{ marginTop: '10px' }}
      count={Math.ceil(pagination.count / pageSize)}
      onChange={pageChangeHandler}
    />
  );
};

export default ShopPagination;
