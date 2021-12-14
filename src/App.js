import { Fragment } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import Input from "./components/Input/Input";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import RunButton from "./components/RunButton/RunButton";

import Grid from "@mui/material/Grid";

function App() {
  return (
    <Fragment>
      <ResponsiveAppBar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={12} style={{ padding: "15px" }}>
          <Editor />
        </Grid>

        <Grid item xs={12} style={{ padding: "0 15px" }}>
          <Grid container direction="row" spacing={5} alignItems="center">
            <Grid container alignItems="center" item xs={2}>
              <RunButton />
            </Grid>
            <Grid item xs={10}>
              <Input input={""} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ padding: "15px" }}>
          <Output
            output={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
