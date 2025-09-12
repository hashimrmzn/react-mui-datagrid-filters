import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
       Login
    </Button>
  );
}
