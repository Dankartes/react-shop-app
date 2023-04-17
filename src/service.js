import dummy_products from './data';

const service = {
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = dummy_products.slice(from, to);

      resolve({
        count: dummy_products.length,
        data: data,
      });
    });
  },
};

export default service;
