import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Typography, Button, AppBar, Toolbar } from "@mui/material";
import styles from "../../styles/Home.module.css";

export default function CourseDetail() {
  const [course, setCourse] = useState(null);
  const { query } = useRouter();
  
  useEffect(() => {
    if (query.id) {
      fetch(`/api/courses/${query.id}`)
        .then((response) => response.json())
        .then((data) => setCourse(data));
    }
  }, [query.id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Course Helper
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4">{course.name}</Typography>
        <Typography variant="body1">{course.description}</Typography>
        <Button variant="contained" color="primary" href="/courses">
          Back to Courses
        </Button>
      </Container>
    </div>
  );
}
