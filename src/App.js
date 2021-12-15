import { useState } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import Input from "./components/Input/Input";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import RunButton from "./components/RunButton/RunButton";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [mode, setMode] = useState("dracula");

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar setMode={setMode} />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          {/* Editor */}
          <Grid item xs={12} style={{ padding: "15px 0" }}>
            <Editor mode={mode} />
          </Grid>

          {/* Input & Run button */}
          <Grid item xs={12}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid container alignItems="center" item xs={12} sm={2}>
                <RunButton />
              </Grid>
              <Grid item xs={12} sm={10}>
                <Input input={""} />
              </Grid>
            </Grid>
          </Grid>

          {/* Output */}
          <Grid item xs={12}>
            <Output
              output={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
