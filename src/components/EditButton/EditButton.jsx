import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function EditButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<EditIcon />}
      sx={{
        textTransform: "none",
        borderRadius: 2,
        fontWeight: "bold",
        px: 3,
        py: 1,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        "&:hover": {
          backgroundColor: "primary.dark",
          boxShadow: "0px 6px 14px rgba(0,0,0,0.2)",
        },
      }}
    >
      Edit
    </Button>
  );
}

export default EditButton;
