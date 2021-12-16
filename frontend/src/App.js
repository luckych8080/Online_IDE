import { useState } from "react";
import Editor from "./components/Editor/Editor";
import Output from "./components/Output/Output";
import ResponsiveAppBar from "./components/MainNavigation/ResponsiveAppBar";
import Input from "./components/Input/Input";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
const axios = require("axios");

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

  const onClickHandler = async () => {
    try {
      const program = {
        clientId: process.env.JDOODLE_CLIENT_ID,
        clientSecret: process.env.JDOODLE_CLIENT_SECRET,
        script: code,
        stdin: input,
        language: lang,
        versionIndex: "0",
      };

      setOutput("Running");

      await axios({
        method: "GET",
        url: "http://localhost:5000/api/",
        body: {
          data: program,
        },
      }).then((response) => {
        console.log({ "Response data": response });
        // console.log({ "Response body": response.body });

        // let out = response.body.output;

        // console.log("response "  + out)

        // setOutput(out);
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
