import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CourseCard = ({ course }) => {
  return (
    <Card sx={{ width: 250, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{course.title}</Typography>
        <Typography color="textSecondary">{course.description}</Typography>
        <Button variant="contained" sx={{ marginTop: 2 }} href={`/courses/${course.id}`}>View Details</Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
