import React from "react";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function ProfileButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <IconButton onClick={handleClick} sx={{ color: "green" }}>
      <AccountCircleIcon fontSize="large" />
    </IconButton>
  );
}

export default ProfileButton;
