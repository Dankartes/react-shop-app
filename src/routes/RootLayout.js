import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div>HEADER</div>
      <Outlet />
    </>
  );
};

export default RootLayout;
