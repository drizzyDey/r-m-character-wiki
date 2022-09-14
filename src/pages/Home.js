import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Stack } from '@mui/material';
import Pagination from "@mui/material/Pagination"; 

import Filter from '../components/Filter/Filter';
import CardsTable from '../components/CardsTable';
import { api } from '../utils/fetchData';

const Home = () => {

  const [characters, setCharacters] = useState();
  const [search, setSearch] = useState('');
  const [numberofPages, setNumberofPages] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('');

  const paginate = (e, value) => {
    setCurrentPage(value);
  }

  useEffect(() => {
    async function getData() {
      if (search) {
        const response = await api.get(
          `character/?page=${currentPage}&name=${search.toLowerCase()}`
        );
        const result = await response.data.results;
        setCharacters(result);
        setNumberofPages(1);
      } else {
        const response = await api.get(`character/?page=${currentPage}`);
        const result = await response.data.results;
        const pages = await response.data.info.pages;
        setCharacters(result);
        setNumberofPages(pages);
      }
    }
    getData();
  }, [currentPage, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  }
  //filters for status
  
  const getStatusFilter = (value) => {
    setStatus(value);
  }
  useEffect(() => {
    async function getStatus() {
      const response = await api.get(`character/?page=${currentPage}&name=${search}&status=${status}`);
      const result = await response.data.results;
      setCurrentPage(1);
      setCharacters(result)
    }
    getStatus();
  }, [status]);

  return (
    <Box>
      <Box position="relative" mb="72px" textAlign='center' mt='8%'>
        <Typography
          textAlign='center'
          color='primary'
          sx={{ mb: {lg: '30px', xs: '10px'}, fontSize: {lg: '20px', xs: '13px'}}}
        >Quick Search</Typography>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "250px" },
            height: { lg: '76px', xs: '23px'},
            borderRadius: "40px",
            mr: '10px'
          }}
          placeholder='Enter a character name for search'
          type='text'
          value={search}
          onChange={(e) => handleSearch(e)}
        />
    </Box>
      <Filter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        status={status}
        setStatus={setStatus}
        filter={getStatusFilter}
      />
      <CardsTable 
        setCharacters={setCharacters}
        characters={characters}
        numberofPages={numberofPages}
        setNumberofPages={setNumberofPages}
        search={search}
      />
      <Stack spacing={2} justifyContent='center' alignItems='flex-end' mr='25px' mt='15px'>
        <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={numberofPages}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Home;