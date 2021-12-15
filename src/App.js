import { useCallback, useState } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import Input from "./components/Input/Input";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [mode, setMode] = useState("dracula");
  const [lang, setLang] = useState("python");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");

  const onClickHandler = useCallback(() => {
    // api send data InputRef
    console.log(input);
    console.log(code);
  }, [input, code]);

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar setMode={setMode} setLang={setLang} />
      <Container maxWidth="lg" style={{ marginBottom: "10px" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          {/* Editor */}
          <Grid item xs={12} style={{ padding: "15px 0" }}>
            <Editor mode={mode} lang={lang} setCode={setCode} />
          </Grid>

          {/* Input & Run button */}
          <Input onClick={onClickHandler} forewardedRef={setInput} />

          {/* Output */}
          <Grid item xs={12}>
            <Output output={output} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
