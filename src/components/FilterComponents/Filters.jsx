import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Stack, FormControl, TextField, InputLabel, Button, Select, MenuItem } from '@mui/material';
function Filters({ category, onCategoryChange, SetSelectname, setTempCategory, onTempchange, tempname, tempCategory }) {



    const resetFilter = () => {
        onCategoryChange("");
        setTempCategory("");
        onTempchange("");
        SetSelectname("");
    }

    return (
        <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">

            <TextField
                label="Search by Name"
                size="small"
                value={tempname}
                variant="outlined"
                sx={{
                    minWidth: 200,
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#ccc",
                        },
                        "&:hover fieldset": {
                            borderColor: "#000",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#000",
                        },
                    },
                }}
                onChange={(e) => onTempchange(e.target.value)}
            />




            <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel id="brand-filter-label">Category</InputLabel>
                <Select labelId="brand-filter-label" defaultValue=""
                    value={tempCategory}
                    onChange={(e) => setTempCategory(e.target.value)}
                    sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ccc",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#000",
                        },
                    }}
                >
                    <MenuItem value="">All</MenuItem>
                    {category.map((brand) => (
                        <MenuItem key={brand} value={brand}>
                            {brand}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div>
                <Button
                    onClick={resetFilter}
                    disableRipple
                    sx={{
                        backgroundColor: "#e50a0a",
                        color: "#fff",
                        textTransform: "none",
                        px: 3,
                        py: 1.2,
                        borderRadius: "8px",
                        transition: "all 0.3s ease-in-out",
                        "&:focus": { outline: "none", boxShadow: "none" },
                        "&:active": { outline: "none", boxShadow: "none" },
                        "&:hover": {
                            outline: "none",
                            boxShadow: "none",
                            backgroundColor: "#000",
                            transform: "scale(1.05)",
                        },
                    }}
                    startIcon={<RestartAltIcon />}
                    variant="contained"
                >
                    Reset
                </Button>

            </div>

        </Stack>
    );
}

export default Filters;
