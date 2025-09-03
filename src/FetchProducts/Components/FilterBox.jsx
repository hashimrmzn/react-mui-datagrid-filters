import React from 'react'
import { Box, Paper, Stack } from '@mui/material';
import Filters from './FilterComponents/Filters';
function FilterBox({category,onCategoryChange}) {
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
                    <Stack>  <Filters category={category} onCategoryChange={onCategoryChange}/></Stack>

                </Box>
            </Paper>
        </>
    )
}

export default FilterBox