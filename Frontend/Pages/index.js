import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/courses")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Course Helper
          </Typography>
          <Button color="inherit" href="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h4" gutterBottom>
          Search Courses
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <List>
          {filteredCourses.map((course) => (
            <ListItem
              key={course.id}
              button
              component={Link}
              href={`/courses/${course.id}`}
            >
              <ListItemText primary={course.name} secondary={course.description} />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}
