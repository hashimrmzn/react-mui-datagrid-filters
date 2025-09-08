import AssessmentIcon from "@mui/icons-material/Assessment";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory, setSearchName } from "../../app/features/filters/filtersSlice";

function RunReport({ tempCategory, tempname }) {
  const dispatch = useDispatch();

  const handleRunReport = () => {
    dispatch(setCategory(tempCategory));
    dispatch(setSearchName(tempname));
  };

  return (
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
  );
}

export default RunReport;
