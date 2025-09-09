import React, { useState } from "react";
import { Box, Paper, Stack, useMediaQuery, useTheme } from "@mui/material";
import Filters from "./FilterComponents/Filters";
import RunReport from "./RunReport/RunRport";
import PdfGenerator from "../pdfGenerator";

function FilterBox({ category,products }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [tempCategory, setTempCategory] = useState("");
  const [tempname, setTempname] = useState("");

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
            <PdfGenerator products={products}/>
          </div>
          <div>
            <RunReport tempCategory={tempCategory} tempname={tempname} />
          </div>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default FilterBox;
