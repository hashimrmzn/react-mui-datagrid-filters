import { DataGrid } from '@mui/x-data-grid';
import useProducts from './UseProducts';
import useAllData from './Components/FetchAllData/UseAllData';
import { Box, Paper } from '@mui/material';
import TopHeading from './Components/TopHeading';
import FilterBox from './Components/FilterBox';
import { useState } from 'react';


const columns = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 70, sortable: false },
    {
        field: 'thumbnail',
        headerName: 'Image',
        width: 100,
        renderCell: (params) => (
            <img
                src={params.row.images[0]}
                alt={params.row.title}
                style={{ width: 50, height: 50, objectFit: 'cover' }}
            />
        ),
    },
    { field: 'title', headerName: 'Name', flex: 4, minWidth: 150, sortable: false },
    {
        field: 'price', headerName: 'Price', flex: 2, minWidth: 150, sortable: false,
        renderCell: (params) => (
            <span style={{ color: '#3939e1' }}>
                ${params.value}
            </span>
        ),

    },
    { field: 'description', headerName: 'Description', flex: 7, minWidth: 250, sortable: false },
    { field: 'availabilityStatus', headerName: 'Availability', flex: 2, minWidth: 50, sortable: false },
    { field: 'brand', headerName: 'Brand', flex: 2, minWidth: 50, sortable: false },
    {
        field: 'discountPercentage', headerName: 'DiscountPercentage', flex: 2, minWidth: 50, sortable: false,
        renderCell: (params) => (
            <span style={{ color: '#3939e1' }}>
                ${params.value}
            </span>
        ),
    },


];
function ShowProducts() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectname,SetSelectname]=useState('');
    const allproducts=useAllData();
    const products = useProducts(selectedCategory,selectname); 
    const category = [...new Set(allproducts.map((p) => p.category))];
  console.log(`this is name of product ${selectname}`);
    return (
        <>
            <Box
                mb={5}
            >
                <FilterBox category={category} onCategoryChange={setSelectedCategory} SetSelectname={SetSelectname} />
            </Box>
            <Paper

                style={{ width: '100%', overflowX: "auto" }}>
                <TopHeading />
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={5}
                    disableColumnSorting
                    sx={{
                        height: "400px",

                        '& .MuiDataGrid-columnHeaders': {
                            color: '#000',
                            fontSize: 16,
                        },
                        '& .MuiDataGrid-cell': {
                            borderBottom: '1px solid #ddd',
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: '#f3f1f1ff',
                        },
                        '& .MuiDataGrid-columnHeader': {
                            pointerEvents: 'none',

                        },
                        '& .MuiDataGrid-sortIcon': {
                            display: 'none',
                        },
                        '& .MuiDataGrid-scrollbarFiller': {
                            display: 'none !important',
                        },
                        '& .MuiDataGrid-filler': {
                            display: 'none',
                        },
                    }}
                />
            </Paper>
        </>
    );
}

export default ShowProducts;
