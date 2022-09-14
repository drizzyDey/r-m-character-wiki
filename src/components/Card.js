import React from 'react';
import { Box, Typography } from '@mui/material';

const Card = ({ id, image, name, location }) => {
  return (
    <Box key={id} alignItems='center' className='single-card' mr={3} mb={3} sx={{
      width: {lg: '350px', xs: '120px'},
      height: {lg: '450px', xs: '170px'},
      ml: {xs: '16px'}
    }}>
      <img src={image} alt='character info' />
      <Typography sx={{ fontSize: {lg: '24px', xs: '12px'}}}>{name}</Typography>
      <Typography sx={{ fontSize: {lg: '18px', xs: '12px'}}}>Last location:</Typography>
      <Typography sx={{ fontSize: {lg: '18px', xs: '12px'}}}>{location}</Typography>
    </Box>
  );
};

export default Card;