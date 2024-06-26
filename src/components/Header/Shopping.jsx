import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Shopping() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="shop-button"
        aria-controls={open ? 'shop-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='navbar'
      >
        Shop
      </Button>
      <Menu
        id="shop-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'shop-button',
        }}
      >
        <MenuItem 
          href='/earrings'
          component='a'
          onClick={handleClose}>
          Earrings</MenuItem>
          <MenuItem 
          href='/macrames'
          component='a'
          onClick={handleClose}>
          Macrames</MenuItem>
      </Menu>
    </div>
  );
}