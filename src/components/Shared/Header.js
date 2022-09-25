import React from 'react';
import { Box } from '@mui/system';
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Close as CloseIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Face as FaceIcon,
  Face2 as Face2Icon,
  ChildFriendly as ChildFriendlyIcon,
  Dashboard as DashboardIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/userRedux';
import { useDispatch, useSelector } from 'react-redux';

const Header = ({ user }) => {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <>
      <Box
        style={{
          maxHeight: '60px',
          minHeight: '60px',
          backgroundColor: '#6F38C5',
          color: 'white',
          padding: '0 15px',
          position: 'sticky',
          top: 0,
          zIndex: 1500,
        }}
      >
        <Box
          style={{
            maxHeight: '60px',
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip title="Menu">
                <Button onClick={toggleDrawer(true)}>
                  <IconButton aria-label="delete" style={{ color: 'white', margin: '0 10px 0 0' }}>
                    <MenuIcon />
                  </IconButton>
                </Button>
              </Tooltip>
              <Drawer
                anchor="left"
                open={drawerState}
                onClose={toggleDrawer(false)}
              >
                <DrawerList toggleDrawer={toggleDrawer} />
              </Drawer>
              <Link to="/">
                <Box style={{ fontSize: '27px', fontFamily: 'Noto Sans Bengali, sans-serif' }}>দারুচিনি</Box>
              </Link>
            </Box>
          </Box>
          <Box>
            <AccountMenu user={user} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;

const DrawerList = ({ toggleDrawer }) => (
  <Box
    style={{ width: '250px' }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <Box
      sx={{
        height: '60px',
        padding: '0 15px',
      }}
    >
      <Box
        sx={{
          height: '60px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Tooltip title="Close">
          <IconButton aria-label="delete" style={{ color: 'inherit' }}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
    <Divider />
    <List>
      <Link to="/men">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="Men" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/women">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Face2Icon />
            </ListItemIcon>
            <ListItemText primary="Women" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/kids">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ChildFriendlyIcon />
            </ListItemIcon>
            <ListItemText primary="Kids" />
          </ListItemButton>
        </ListItem>
      </Link>
      {/* <Link to="/trial-room">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MeetingRoomIcon />
            </ListItemIcon>
            <ListItemText primary="Trial Room" />
          </ListItemButton>
        </ListItem>
      </Link> */}
    </List>
    {/* <Divider />
    <List>
    </List> */}
  </Box>
);

const AccountMenu = ({ user }) => {
  const products = useSelector((state) => state.cart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch =  useDispatch()
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <>
          <Link to="/cart">
            <Tooltip title="My Cart">
              <IconButton
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Box
                  sx={{
                    ml: 2,
                    color: 'rgb(111, 56, 197)',
                    backgroundColor: 'white',
                    padding: '5px 20px',
                    borderRadius: '50rem',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <AddShoppingCartIcon sx={{ width: 24, height: 24 }} />
                  <Box component="span" fontSize="20px">{products.quantity}</Box>
                </Box>
              </IconButton>
            </Tooltip>
          </Link>
        </>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, color: 'white' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/user">
          <MenuItem>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        </Link>
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />

        {
          user ? 
            <MenuItem onClink ={()=>dispatch(logout)}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              logout
            </MenuItem>
         :
            <Link to="/login">
              <MenuItem>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
            </Link>
        }

      </Menu>
    </React.Fragment>
  );
};
