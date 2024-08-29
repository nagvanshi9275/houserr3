



import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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

  const handleCityMenuClose = () => {
    setAnchorEl(null);
    setShowCityInDrawer(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const cityOptions = ['Pune', 'Hyderabad', 'Kolkata', 'Patliputra'];

  const cityMenu = (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCityMenuClose}>
      {cityOptions.map((city) => (
        <MenuItem key={city} onClick={handleCityMenuClose}>
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
                <ListItem button key={city} sx={{ pl: 4 }} onClick={handleCityMenuClose}>
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
            <Button variant="contained" color="primary">
              Request Call
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="contained" color="secondary" component={Link} to="/blog">
              Blog
            </Button>
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
                  <Button color="inherit" onClick={handleCityMenuOpen}>
                    City
                  </Button>
                  {cityMenu}
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/listproperty">
                    ListProperty
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/how-to-book">
                    How to Book
                  </Button>
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
                  <Button variant="contained" color="primary">
                    Request Call
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary" component={Link} to="/blog">
                    Blog
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







