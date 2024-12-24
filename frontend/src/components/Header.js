import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#00796b' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Course Helper
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/login" passHref>
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
