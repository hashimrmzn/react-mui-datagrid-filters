import React, { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "../EditForm/EditForm";

function EditButton({product}) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <Button
        sx={{
          float: "left",
          outline: "none",
          border: "none",
          boxShadow: "none",
          "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none",
          },
          "&:active": {
            outline: "none",
            border: "none",
            boxShadow: "none",
          },
        }}
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        onClick={handleClick}
      >
        Edit
      </Button>

      
      <EditForm
        showForm={showForm}
        onClose={() => setShowForm(false)}   
        product={product}       
        onSave={(updatedData) => {
          console.log("Saved changes:", updatedData);
          setShowForm(false); 
        }}
      />
    </>
  );
}

export default EditButton;
