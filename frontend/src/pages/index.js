import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '../src/components/CourseCard';
import SearchBar from '../src/components/SearchBar';
import Header from '../src/components/Header';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/courses');
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {courses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(course => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
};

export default Home;
