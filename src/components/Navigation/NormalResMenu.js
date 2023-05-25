import { Home } from '@mui/icons-material';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { pageLinks } from './NavigationBar';

const NormalResMenu = () => {
  return (
    <>
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
    </>
  );
};

export default NormalResMenu;
