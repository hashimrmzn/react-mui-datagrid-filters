import React from 'react'
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Stack, FormControl, TextField, InputLabel, Button, Select, MenuItem } from '@mui/material';
function ResetFilter({ onCategoryChange, SetSelectname, tempname, tempCategory }) {

    const handleRunReport = () => {
        onCategoryChange(tempCategory);
        SetSelectname(tempname);
    };
    return (
        <>
            <Button
                onClick={handleRunReport}
                disableRipple
                sx={{
                    backgroundColor: "#6cdf6cff",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: "8px",
                    px: 3,
                    py: 1.2,
                    transition: "all 0.3s ease-in-out",
                    "&:focus": { outline: "none", boxShadow: "none" },
                    "&:active": { outline: "none", boxShadow: "none" },
                    "&:hover": {
                        outline: "none",
                        boxShadow: "0px 4px 12px rgba(7, 85, 13, 0.3)",
                        backgroundColor: "#6cdf6cff",
                        transform: "scale(1.05)",
                    },
                    "& .MuiButton-startIcon": {
                        marginRight: "6px", 
                    },
                }}
                startIcon={<AssessmentIcon />}
                variant="contained"
            >
                Run Report
            </Button>


        </>
    )
}

export default ResetFilter