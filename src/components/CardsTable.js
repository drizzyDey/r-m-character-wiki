import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

import SingleCard from './SingleCard';
import Loader from './Loader';

const CardsTable = ({ characters }) => {

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={4} justifyContent="center" alignItems="center">
        {!characters && <Loader />}
        {characters ? (
          characters.map((card) => {
            return (
              <Grid item>
                <SingleCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  status={card.status}
                  species={card.species}
                  image={card.image}
                  location={card.location.name}
                />
              </Grid>
            );
          })
        ) : (
          <h1>No Characters found</h1>
        )}
      </Grid>
    </Box>
  );
};

export default CardsTable;