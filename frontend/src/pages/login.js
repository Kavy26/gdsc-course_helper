import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication here, such as API call
    router.push('/');
  };

  return (
    <Box component="form" onSubmit={handleLogin} sx={{ width: 300, margin: 'auto', paddingTop: 5 }}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>Login</Button>
    </Box>
  );
};

export default Login;
