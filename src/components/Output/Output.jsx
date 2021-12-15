import { Paper } from "@mui/material";
import { Fragment } from "react";

const Output = (props) => {
  return (
    <Fragment>
      <b>Output</b>
      <Paper elevation={3}>
        <div style={{ "minHeight": "20vh", 'padding':'0 5px'}}>
          <p>{props.output}</p>
        </div>
      </Paper>
    </Fragment>
  );
};

export default Output;
