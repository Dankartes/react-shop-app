import { Home } from '@mui/icons-material';
import { Typography, Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import { pageLinks } from './NavigationBar';
import styles from './NormalResMenu.module.css';

const NormalResMenu = ({ pageLinks }) => {
  const userId = useSelector(state => state.authReducer.userId);

  useEffect(() => {
    if (!userId) {
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles['active-menu-link'] : styles['menu-link']
        }
        to="/"
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Home /> HOME
        </span>
      </NavLink>

      {pageLinks.map(pageLink => {
        if (!userId && pageLink.requiresLogin) return null;
        return (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles['active-menu-link'] : styles['menu-link']
            }
            key={pageLink.page}
            to={pageLink.navLink}
            style={{ marginLeft: '15px' }}
          >
            {pageLink.page.toUpperCase()}
          </NavLink>
        );
      })}
    </Box>
  );
};

export default NormalResMenu;
