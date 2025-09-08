import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Paper, CircularProgress, Typography } from "@mui/material";
import TopHeading from "./TopHeading";
import FilterBox from "./FilterBox";
import {
  fetchAllProducts,
  fetchFilteredProducts,
} from "../app/features/products/productsThunks";

const columns = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 70 },
  {
    field: "thumbnail",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.images[0]}
        alt={params.row.title}
        style={{ width: 50, height: 50, objectFit: "cover" }}
      />
    ),
  },
  {
    field: "title", headerName: "Name", flex: 4, minWidth: 150

  },
  {
    field: "price",
    headerName: "Price",
    flex: 2,
    renderCell: (params) => (
      <div
        style={{
          backgroundColor: "rgb(32 135 6)",
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        ${params.value}
      </div>
    ),
  },

  { field: "description", headerName: "Description", flex: 7, minWidth: 250 },
{
  field: "availabilityStatus",
  headerName: "Availability",
  flex: 2,
  renderCell: (params) => {
    const value = params.value?.toLowerCase(); 

    let bgColor = "#9e9e9e"; 
    if (value === "in stock") bgColor = "rgb(20, 58, 23)"; 
    else if (value === "low stock") bgColor = "#e65100";
    else if (value === "out of stock") bgColor = "#b71c1c"; 

    return (
      <div
        style={{
          backgroundColor: bgColor,
          color: "#fff",
          padding: "6px 12px",
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: 500,
          width: "100%",
        }}
      >
        {params.value}
      </div>
    );
  },
},

  { field: "brand", headerName: "Brand", flex: 2 },
  {
    field: "discountPercentage",
    headerName: "Discount %",
    flex: 2,
    
  }

];

function ShowProducts() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchName, setSearchName] = useState("");
  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
    dispatch(fetchAllProducts()).then((res) => {
      if (res.payload) {
        const cats = [...new Set(res.payload.map((p) => p.category))];
        setAllCategories(cats);
      }
    });
  }, [dispatch]);


  useEffect(() => {
    dispatch(
      fetchFilteredProducts({ category: selectedCategory, query: searchName })
    );
  }, [dispatch, selectedCategory, searchName]);

  return (
    <>

      <Box mb={5}>
        <FilterBox
          category={allCategories}
          onCategoryChange={setSelectedCategory}
          SetSelectname={setSearchName}
        />
      </Box>


      <Paper style={{ width: "100%", overflowX: "auto" }}>
        <TopHeading />

        {status === "loading" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
          >
            <CircularProgress />
            <Typography variant="body1" style={{ marginTop: "12px" }}>
              Loading products, please wait...
            </Typography>
          </div>
        ) : status === "failed" ? (
          <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
            <Typography variant="body1">Error: {error}</Typography>
          </div>
        ) : (
          <DataGrid
            className="data-table"
            rows={products}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row.id}
            disableColumnSorting

            sx={{
              minHeight: "400px !important",
              maxHeight: "400px !important",
              "& .MuiDataGrid-columnHeaders": {
                color: "#000",
                fontSize: 16,
                height: "45px",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",  
                fontSize: "16px",     
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#f3f1f1ff",
              },
            }}
          />
        )}
      </Paper>
    </>
  );
}

export default ShowProducts;
