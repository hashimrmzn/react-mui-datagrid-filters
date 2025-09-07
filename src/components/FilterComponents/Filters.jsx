import React, { useState } from 'react';

import { Stack, FormControl, TextField, InputLabel, Button, Select, MenuItem } from '@mui/material';
function Filters({ category, onCategoryChange, SetSelectname }) {
    const [tempCategory, setTempCategory] = useState("");
    const [tempname,onTempchange]=useState("");
    const handleRunReport = () => {
    onCategoryChange(tempCategory); 
    SetSelectname(tempname);
  };
  
    return (
        <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
    
            <TextField
                label="Search by Name"
                size="small"
                variant="outlined"
                sx={{ minWidth: 200 }}
                onChange={(e) => onTempchange(e.target.value)}
            />
          
                

         
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="brand-filter-label">Category</InputLabel>
                <Select labelId="brand-filter-label" defaultValue=""
                    onChange={(e) => setTempCategory(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    {category.map((brand) => (
                        <MenuItem key={brand} value={brand}>
                            {brand}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Button
              onClick={handleRunReport}
                sx={{
                    backgroundColor: "#000"
                }}
                variant="contained">Run Report</Button>
        </Stack>
    );
}

export default Filters;
