import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

const NavBar = ({ isRegistered }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showCityInDrawer, setShowCityInDrawer] = React.useState(false);

  const navigate = useNavigate();

  const handleCityMenuOpen = (event, fromDrawer = false) => {
    if (fromDrawer) {
      setShowCityInDrawer(true);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCityMenuClose = (city = null) => {
    setAnchorEl(null);
    setShowCityInDrawer(false);
    if (city) {
      navigate(`/${city}`);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const cityOptions = ['Chennai', 'Pune', 'Bangalore', 'Delhi'];

  const cityMenu = (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleCityMenuClose()}>
      {cityOptions.map((city) => (
        <MenuItem key={city} onClick={() => handleCityMenuClose(city)}>
          {city}
        </MenuItem>
      ))}
    </Menu>
  );

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={(e) => handleCityMenuOpen(e, true)}>
            <ListItemText primary="City" />
          </ListItem>
          {showCityInDrawer && (
            <List component="div" disablePadding>
              {cityOptions.map((city) => (
                <ListItem button key={city} sx={{ pl: 4 }} onClick={() => handleCityMenuClose(city)}>
                  <ListItemText primary={city} />
                </ListItem>
              ))}
            </List>
          )}
          <ListItem button component={Link} to="/listproperty">
            <ListItemText primary="ListProperty" />
          </ListItem>
          <ListItem button component={Link} to="/how-to-book">
            <ListItemText primary="How to Book" />
          </ListItem>
          <ListItem>
            <Button variant="contained" color="primary" onClick={() => navigate('/request-call')}>
              Request Call
            </Button>
          </ListItem>
          <ListItem>
            <Typography variant="body1" component={Link} to="/blog" sx={{ color: 'text.primary', textDecoration: 'none', display: 'block', padding: 1 }}>
              Blog
            </Typography>
          </ListItem>
          <ListItem>
            <Button color="inherit" onClick={() => navigate('/button')}>
              <AccountCircle />
              <Typography variant="caption" sx={{ ml: 1 }}>
                {isRegistered ? 'Your Profile' : 'Login/Signup'}
              </Typography>
            </Button>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar position="fixed" color="default">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Roomyo
              </Link>
            </Typography>
            {isMobile ? (
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Grid container alignItems="center" spacing={2} sx={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                <Grid item>
                  <Button color="inherit" onClick={handleCityMenuOpen} endIcon={<ArrowDropDown />}>
                    City
                  </Button>
                  {cityMenu}
                </Grid>
                <Grid item>
                  <Box sx={{ mt: 3 }}>
                    <Button color="inherit" component={Link} to="/listproperty" sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>
                      <Typography variant="body1">ListProperty</Typography>
                      <Typography variant="caption" sx={{ color: 'red', mt: 0.5 }}>
                        (Free)
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/how-to-book">
                    How to Book
                  </Button>
                </Grid>
                <Grid item>
                  <Typography variant="body1" component={Link} to="/blog" sx={{ color: 'text.primary', textDecoration: 'none' }}>
                    Blog
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton color="inherit" onClick={() => isRegistered ? navigate('/button') : navigate('/login')}>
                    <AccountCircle />
                    {!isMobile && (
                      <Typography variant="caption" sx={{ ml: 1 }}>
                        {isRegistered ? 'Your Profile' : 'Login/Signup'}
                      </Typography>
                    )}
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={() => navigate('/request-call')}>
                    Request Call
                  </Button>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </Container>
        {drawer}
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
