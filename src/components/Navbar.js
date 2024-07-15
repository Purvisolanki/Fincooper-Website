import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Solution', 'Career', 'Connect'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src='assets/finlogo.png' alt='logo' style={{ width: "150px" }} />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigate(`/${page.toLowerCase()}`)}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  mx: 2,
                  textDecoration: window.location.pathname === `/${page.toLowerCase()}` ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end', }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginRight: "0px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                marginTop: '40px', // Adjust the top margin as needed
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigate(`/${page.toLowerCase()}`)}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    width: '100%',
                    justifyContent: 'center',
                    textDecoration: window.location.pathname === `/${page.toLowerCase()}` ? 'underline' : 'none',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
