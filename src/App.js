import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import Input from "./components/Input/Input";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import RunButton from "./components/RunButton/RunButton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        {/* Editor */}
        <Grid item xs={12} style={{ padding: "15px" }}>
          <Editor />
        </Grid>

        {/* Input & Run button */}
        <Grid item xs={12} style={{ padding: "0 15px" }}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid container alignItems="center" item xs={12} sm={2}>
              <RunButton />
            </Grid>
            <Grid item xs={12} sm={10} >
              <Input input={""} />
            </Grid>
          </Grid>
        </Grid>

        {/* Output */}
        <Grid item xs={12} style={{ padding: "5px 15px" }}>
          <Output
            output={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
