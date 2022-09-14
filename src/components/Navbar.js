import React from 'react';
import { Box, Stack, Link, Typography, Divider } from '@mui/material';

const Navbar = () => {
  return (
    <Box sx={{ my: {lg: '30px', xs: '10px'}, mx: {lg: '50px', xs: '10px'}}}>
      <Stack 
        direction='row'
      >
        <Typography sx={{ fontSize: {xs: '13px', lg: '30px'}, mr: {lg: '600px', xs: '100px'}}}>
          Rick & Morty WiKi
        </Typography>

        <Stack 
          direction='row'
          divider={<Divider orientation="vertical" flexItem />}
          spacing={1}
          sx={{ fontSize: {lg: '18px', xs: '10px'}}}
        >
          <Link href='/'>
            Characters
          </Link>
          <Link href='/location'>
            Location
          </Link>
          <Link href='/episodes'>
            Episodes
          </Link>
        </Stack>

      </Stack>
    </Box>
  );
};

export default Navbar;