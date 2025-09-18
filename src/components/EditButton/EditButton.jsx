import React, { useState } from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EditForm from "../EditForm/EditForm";
import { useDispatch } from "react-redux";
import { UpdateProduct } from "../../app/features/auth/authThunks";

function EditButton({product}) {
  const [showForm, setShowForm] = useState(false);
 const dispatch = useDispatch();
  const handleClick = () => {
    setShowForm(true);
  };

  const handleSave = (updatedData) => {
    dispatch(UpdateProduct({ id: product.id, updates: updatedData }));
    setShowForm(false);
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
         onSave={handleSave}
      />
    </>
  );
}

export default EditButton;
