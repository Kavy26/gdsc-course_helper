import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CourseForm from '../src/components/CourseForm';

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/courses/${id}`)
        .then(response => {
          setCourse(response.data);
        })
        .catch(error => {
          console.error('Error fetching course details', error);
        });
    }
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? 'Cancel Edit' : 'Edit Course'}
      </button>
      {isEditMode && <CourseForm courseData={course} setCourseData={setCourse} isEditMode={isEditMode} />}
    </div>
  );
};

export default CourseDetails;
