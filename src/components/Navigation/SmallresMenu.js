import { Home } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { pageLinks } from './NavigationBar';
import { useState } from 'react';

const SmallResMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {' '}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pageLinks.map(pageLink => (
            <MenuItem key={pageLink.page} onClick={handleCloseNavMenu}>
              <Typography
                component={Link}
                to={pageLink.navLink}
                textAlign="center"
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  '&:hover': {
                    color: 'black',
                  },
                }}
              >
                {pageLink.page}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Home sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          letterSpacing: '2px',
          color: 'white',
          textDecoration: 'none',
          '&:hover': {
            color: 'orange',
          },
        }}
      >
        Home
      </Typography>
    </>
  );
};

export default SmallResMenu;