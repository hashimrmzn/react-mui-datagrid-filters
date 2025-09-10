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

import RunReport from "../RunReport/RunRport";

function Filters({ category, tempCategory, setTempCategory, tempname, setTempname }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


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





      <div>
        <RunReport tempCategory={tempCategory} tempname={tempname} />
      </div>
    </Stack>
  );
}

export default Filters;
