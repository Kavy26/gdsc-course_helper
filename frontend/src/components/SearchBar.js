import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box sx={{ margin: 2 }}>
      <TextField
        label="Search Courses"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
