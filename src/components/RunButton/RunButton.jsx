import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const RunButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<PlayArrowIcon />}
      color="success"
      style={{ margin: "auto" }}
    >
      Run
    </Button>
  );
};

export default RunButton;
