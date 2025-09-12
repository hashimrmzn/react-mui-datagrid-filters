import React from 'react'
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { logout } from '../../app/features/auth/authSlice';

function LogoutButton() {
const dispatch = useDispatch();
    const onlogout=()=>{
     dispatch(logout());
    }
    return (
        <Button variant="contained" color="primary" onClick={onlogout}>
            Logout
        </Button>
    )
}

export default LogoutButton