import React from 'react';

import { Stack, FormControl, TextField, InputLabel, Select, MenuItem } from '@mui/material';
function Filters({ category,onCategoryChange }) {

    return (
        <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
            {/* my Title Filter */}
            <TextField
                label="Search by Title"
                size="small"
                variant="outlined"
                sx={{ minWidth: 200 }}

            />

            {/* my Price Filter */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="price-filter-label">Sort by Price</InputLabel>
                <Select defaultValue="">
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="low-high">Low → High</MenuItem>
                    <MenuItem value="high-low">High → Low</MenuItem>
                </Select>
            </FormControl>

            {/* my Brand Filter */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="brand-filter-label">Category</InputLabel>
                <Select labelId="brand-filter-label" defaultValue=""
                 onChange={(e) => onCategoryChange(e.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    {category.map((brand) => (
                        <MenuItem key={brand} value={brand}>
                            {brand}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Stack>
    );
}

export default Filters;
