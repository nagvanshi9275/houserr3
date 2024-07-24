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
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showCityInDrawer, setShowCityInDrawer] = React.useState(false);

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
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleCityMenuClose}
    >
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
          {['Privillage', 'How to Book', 'Blog'].map((text) => (
            <ListItem button key={text} component={Link} to={text.toLowerCase().replace(' ', '-')}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ListItem>
            <Button variant="contained" color="primary">
              Request Call
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
          <Toolbar disableGutters>
            {isMobile ? (
              <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Roomoyo
                  </Link>
                </Typography>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6" component="div">
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Roomyo
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button color="inherit" onClick={handleCityMenuOpen}>
                      City
                    </Button>
                    {cityMenu}
                    <Button color="inherit" component={Link} to="/privillage">Privillage</Button>
                    <Button color="inherit" component={Link} to="/how-to-book">How to Book</Button>
                    <Button color="inherit" component={Link} to="/blog">Login</Button>
                    <Button variant="contained" color="primary">
                      Request Call
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </Container>
        {drawer}
      </AppBar>
      {/* Adding some spacing to account for the fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default NavBar;








