import React, { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button, Paper, Stack, useMediaQuery, useTheme } from "@mui/material";
import Filters from "./FilterComponents/Filters";
import PdfGenerator from "../pdfGenerator";
import { useDispatch } from "react-redux";
import { resetFilters } from "../app/features/filters/filtersSlice";
function FilterBox({ category, products }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [tempCategory, setTempCategory] = useState("");
  const [tempname, setTempname] = useState("");
  const dispatch = useDispatch();
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,

      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={isMobile ? 2 : 3}
        justifyContent="space-between"
        alignItems={isMobile ? "stretch" : "center"}
      >

        <Filters
          category={category}
          tempCategory={tempCategory}
          setTempCategory={setTempCategory}
          tempname={tempname}
          setTempname={setTempname}
        />


        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 2}
          sx={{ maxWidth: isMobile ? "100%" : "auto" }}
          justifyContent="center"
          alignItems="center"
        >
          <div>
            <PdfGenerator products={products} />
          </div>
          <div>
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
          </div>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default FilterBox;
