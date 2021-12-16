import { useState } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import Input from "./components/Input/Input";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
const axios = require("axios");

require("dotenv").config();

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

  console.log(process.env.JDOODLE_CLIENT_ID);
  console.log(process.env.JDOODLE_CLIENT_SECRET);

  const onClickHandler = async () => {
    try {
      let program = {
        clientId: "7b76a48a5ef2197afda19b14cefca862",
        clientSecret:
          "6dddb912bdfdd01bde8e6809d109e5b0b918a3bf39591f475155ad358e37574b",
        script: code,
        stdin: input,
        language: lang,
        versionIndex: "0",
      };

      setOutput("Running...");

      await axios({
        method: "GET",
        url: "http://localhost:5000/api",
        params: {
          data: program,
        },
      })
        .then((response) => {
          let out = response.data.output;
          out = out.split("\n").map((line) => <div>{line}</div>);
          setOutput(out);
        })
        .catch((err) => {
          console.log("Error in axios request: ", err);
        });
    } catch (err) {
      console.log("Error occured in onClickHandler function in App.js: ", err);
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
