import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ margin: '1%', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
