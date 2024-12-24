import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const CourseForm = ({ courseData, setCourseData, isEditMode }) => {
  const [title, setTitle] = useState(courseData?.title || '');
  const [description, setDescription] = useState(courseData?.description || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:5000/courses/${courseData.id}`, { title, description });
      } else {
        await axios.post('http://localhost:5000/courses', { title, description });
      }
      setCourseData([]);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Course Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Course Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        {isEditMode ? 'Update Course' : 'Add Course'}
      </Button>
    </Box>
  );
};

export default CourseForm;
