import React from 'react'
import { useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import Filters from './FilterComponents/Filters';
import ResetFilter from './ResetFilter/ResetFilter';
function FilterBox({ category, onCategoryChange, SetSelectname }) {
    const [tempCategory, setTempCategory] = useState("");
    const [tempname, onTempchange] = useState("");
    return (
        <>
            <Paper elevation={3} sx={{
                p: "20px",
            }}>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Stack>  <Filters category={category} onCategoryChange={onCategoryChange} SetSelectname={SetSelectname}
                        setTempCategory={setTempCategory}
                        onTempchange={onTempchange}
                        tempCategory={tempCategory}
                        tempname={tempname}
                    /></Stack>
                    <Stack>
                        <ResetFilter
                            category={category} onCategoryChange={onCategoryChange} SetSelectname={SetSelectname}
                            setTempCategory={setTempCategory}
                            onTempchange={onTempchange}
                            tempCategory={tempCategory}
                            tempname={tempname}
                        />

                    </Stack>
                </Box>
            </Paper>
        </>
    )
}

export default FilterBox