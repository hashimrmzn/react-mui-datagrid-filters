import React, { useEffect,  useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function EditForm({ showForm, onClose,  onSave,product }) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
 
console.log(`the selected product is ${product}`);

  const validate = (data) => {
    const e = {};
    if (!data.title?.trim()) e.title = "Title is required";
    if (data.price === "" || data.price === null) {
      e.price = "Price is required";
    } else if (Number.isNaN(Number(data.price)) || Number(data.price) <= 0) {
      e.price = "Enter a valid positive number";
    }
    return e;
  };

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };
useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        price: product.price || "",
        description: product.description || "",
      });
    }
  }, [product]);
  const handleSave = () => {
    const e = validate(formData);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      if (onSave) {
        onSave({
          ...formData,
          price: Number(formData.price),
        });
      }
      if (onClose) onClose();
    }
  };

  return (
    <Drawer
      anchor="right"
      open={showForm}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: 400 },
          maxWidth: 400,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid rgba(0,0,0,0.08)",
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: 1.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
          bgcolor: "background.paper",
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Product details
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Update the product information below
          </Typography>
        </Box>

        <IconButton
          onClick={onClose}
          edge="end"
          aria-label="close edit form"
          sx={{
            color: "text.secondary",
            bgcolor: "transparent",
            "&:hover": { bgcolor: "action.hover" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

     
      <Box
        component="div"
        sx={{
          p: { xs: 2, sm: 3 },
          display: "flex",
          flexDirection: "column",
          gap: 2.25,
          overflowY: "auto",
          flex: 1,
          bgcolor: "background.default",
        }}
      >
        <TextField
       
          label="Product Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.title}
          helperText={errors.title}
          variant="outlined"
          size="medium"
          inputProps={{ "aria-label": "product title" }}
        />

        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.price}
          helperText={errors.price || "Amount in your store currency"}
          variant="outlined"
          size="medium"
          inputProps={{ min: 0, step: "0.01", "aria-label": "product price" }}
        />

        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={5}
          variant="outlined"
          size="medium"
          inputProps={{ "aria-label": "product description" }}
          
        />
      </Box>

      {/* Bottom action bar */}
      <Box
        sx={{
          px: { xs: 2, sm: 3 },
          py: 2,
          borderTop: "1px solid rgba(0,0,0,0.04)",
          bgcolor: "background.paper",
        }}
      >
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{
              textTransform: "none",
              borderRadius: 1,
              minWidth: 110,
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            disabled={Object.keys(errors).length > 0}
            sx={{
              textTransform: "none",
              borderRadius: 1,
              minWidth: 140,
              boxShadow: "0 6px 18px rgba(25, 118, 210, 0.12)",
            }}
          >
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default EditForm;
