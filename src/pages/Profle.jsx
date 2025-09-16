import React, { useEffect, useState } from "react";
import { FetchUser } from "../services/fetchUser";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchUser()
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <Box sx={{ minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box sx={{ minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress size={40} />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5, px: 2 }}>
      <Card sx={{ maxWidth: 500, width: "100%", borderRadius: 4, boxShadow: 6 }}>
        <CardMedia
          component="img"
          alt={user.firstname}
          image={user.image}
          sx={{ height: 200, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            {user.firstname} {user.lastname}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2"><strong>ID:</strong> {user.id}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2"><strong>Username:</strong> {user.username}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Email:</strong> {user.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2"><strong>Gender:</strong> {user.gender}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Profile;
