import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const pageLinks = [
  { page: 'Products', navLink: '/products/1' },
  { page: 'Add product', navLink: '/add-product' },
];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar bar disableGutters>
          <Home sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              letterSpacing: '2px',
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: 'orange',
              },
            }}
          >
            Home
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pageLinks.map(pageLink => (
              <Button
                // onClick={handleCloseNavMenu}
                key={pageLink.page}
                component={Link}
                to={pageLink.navLink}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    color: 'orange',
                  },
                }}
              >
                {pageLink.page}
              </Button>
            ))}
          </Box>

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
