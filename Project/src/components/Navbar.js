import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const Navbar = () => {
  const [featuresMenuAnchor, setFeaturesMenuAnchor] = useState(null);
  const [solutionsMenuAnchor, setSolutionsMenuAnchor] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleFeaturesMenuOpen = (event) => {
    setFeaturesMenuAnchor(event.currentTarget);
  };

  const handleFeaturesMenuClose = () => {
    setFeaturesMenuAnchor(null);
  };

  const handleSolutionsMenuOpen = (event) => {
    setSolutionsMenuAnchor(event.currentTarget);
  };

  const handleSolutionsMenuClose = () => {
    setSolutionsMenuAnchor(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#566573' }}>
      <Container>
        <Toolbar>
          {/* Menu Icon for Small Screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ marginRight: '2px', '@media (min-width: 600px)': { display: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

    
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 , color: 'white'}}>
           <Diversity3Icon/>
          </Typography>
          <Typography variant="h6"  sx={{ flexGrow: 1 , color: 'white'}}>
         
          </Typography>
          
    
          <div sx={{ '@media (max-width: 600px)': { display: 'none' } }}>
          <Button
              color="inherit"
              onClick={handleFeaturesMenuOpen}
              sx={{ marginRight: '10px' }}
            >
              Features
            </Button>
            
            <Button component={Link} to="/Contact" color="inherit">
              Contact us
            </Button>
            <Button component={Link} to="/investors" color="inherit">
              Investors
            </Button>
           
           
            <Button component={Link} to="/aboutus" color="inherit">
              Aboutus
            </Button>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
          </div>

    
          <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
            <List>
              <ListItemButton component={Link} to="/Contact" onClick={handleDrawerClose}>
                <ListItemText primary="CONTACTUS" />
              </ListItemButton>
              <ListItemButton component={Link} to="/investors" onClick={handleDrawerClose}>
                <ListItemText primary="Investors" />
              </ListItemButton>
              <ListItemButton onClick={handleFeaturesMenuOpen}>
                <ListItemText primary="Features" />
              </ListItemButton>
             
              <ListItemButton component={Link} to="/login" onClick={handleDrawerClose}>
                <ListItemText primary="Login" />
              </ListItemButton>
              <ListItemButton component={Link} to="/signup" onClick={handleDrawerClose}>
                <ListItemText primary="Registration" />
              </ListItemButton>
            </List>
          </Drawer>
          <Menu
            anchorEl={featuresMenuAnchor}
            open={Boolean(featuresMenuAnchor)}
            onClose={handleFeaturesMenuClose}
          >
            <MenuItem component={Link} to="/feature/project-management" onClick={handleFeaturesMenuClose}>
              Support 24/7
            </MenuItem>
            <MenuItem component={Link} to="/feature/goals-and-reporting" onClick={handleFeaturesMenuClose}>
              Supercharts
            </MenuItem>
            <MenuItem component={Link} to="/feature/workflows-and-automation" onClick={handleFeaturesMenuClose}>
              Market Data
            </MenuItem>
            <MenuItem component={Link} to="/feature/resource-management" onClick={handleFeaturesMenuClose}>
              News
            </MenuItem>
            <MenuItem component={Link} to="/feature/admin-and-security" onClick={handleFeaturesMenuClose}>
              Admin and Security
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;