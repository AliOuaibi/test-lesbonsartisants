import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuRoundedIcon/>Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
            <Link to="/product/list" className="nav-link">
                List Product
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/product/create" className="nav-link">
                Create Product
            </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}