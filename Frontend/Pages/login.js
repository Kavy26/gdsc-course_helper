import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import styles from "../styles/Login.module.css";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField label="Username" name="username" fullWidth margin="normal" required />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}
