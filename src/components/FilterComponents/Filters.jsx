import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDispatch } from "react-redux";
import {
  Stack,
  FormControl,
  TextField,
  InputLabel,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { resetFilters } from "../../app/features/filters/filtersSlice";

function Filters({ category, tempCategory, setTempCategory, tempname, setTempname }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={isMobile ? 2 : 3}
  
      alignItems={isMobile ? "stretch" : "center"}
  
    >

      <TextField
        label="Search by Name"
        size="small"
        fullWidth={isMobile}
        value={tempname}
        variant="outlined"
        sx={{
          minWidth: 200,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#ccc" },
            "&:hover fieldset": { borderColor: "#000" },
            "&.Mui-focused fieldset": { borderColor: "#000" },
          },
        }}
        onChange={(e) => setTempname(e.target.value)}
      />

      <FormControl size="small" fullWidth={isMobile} sx={{ minWidth: 150 }}>
        <InputLabel id="brand-filter-label">Category</InputLabel>
        <Select
          labelId="brand-filter-label"
          value={tempCategory}
          onChange={(e) => setTempCategory(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#ccc" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#000" },
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


      <Button
        onClick={() => {
          setTempCategory("");
          setTempname("");
          dispatch(resetFilters());
        }}
        disableRipple
        fullWidth={isMobile}
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
            backgroundColor: "#c70808",
            transform: "scale(1.05)",
          },
        }}
        startIcon={<RestartAltIcon />}
        variant="contained"
      >
        Reset
      </Button>
    </Stack>
  );
}

export default Filters;
