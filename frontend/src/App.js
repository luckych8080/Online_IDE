import { useState } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import Input from "./components/Input/Input";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid, CircularProgress } from "@mui/material";
const axios = require("axios");

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [mode, setMode] = useState("dracula");
  const [lang, setLang] = useState("python3");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");

  const loading = <CircularProgress color="success" />;

  const onClickHandler = async () => {
    try {
      let program = {
        script: code,
        stdin: input,
        language: lang,
        versionIndex: "0",
      };

      setOutput(loading);

      await axios({
        method: "GET",
        url: process.env.REACT_APP_BACKEND_URL,
        params: {
          data: program,
        },
      })
        .then((response) => {
          let out = response.data.output;
          out = out.split("\n").map((line) => <p key={line}>{line}</p>);
          setOutput(out);
        })
        .catch((err) => {
          setOutput("");
          console.log("Error in axios request: ", err);
        });
    } catch (err) {
      console.log("Error occured in onClickHandler function in App.js: ", err);
      setOutput("");
    }
  };

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
