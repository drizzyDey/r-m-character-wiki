import React from 'react';
import { Box, Typography, Badge } from '@mui/material';

const SingleCard = ({ id, image, name, status, species, location }) => {

  return (
    <Badge badgeContent={status} color={
      (status === 'Alive') ? 'success' : (status === 'Dead') ? 'secondary' : 'primary'
    }>
      <Box key={id} className='single-card' sx={{
        width: {lg: '350px', xs: '120px'},
        height: {lg: '460px', xs: '150px'}
      }}>
        <img src={image} alt='character' />
        <Typography sx={{ fontSize: {lg: '20px', xs: '12px'}}}>{name}</Typography>
        <p className='description'><b>Specie:</b> {species}</p>
        <p className='location'><b>Last location:</b> {location}</p>
      </Box>
    </Badge>
  );
};

export default SingleCard;