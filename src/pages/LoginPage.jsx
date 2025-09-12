import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, TextField, Button, Typography, Box, Card, CardContent, CircularProgress, Alert } from "@mui/material";
import { Navigate } from "react-router-dom";
import { loginUser } from "../app/features/auth/authThunks";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 8, p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </Box>
          <Typography mt={3}>
            Hint(usenername: emilys and Password: emilyspass) 
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
