import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const [lang, setLang] = React.useState("python");
  const [theme, setTheme] = React.useState("dracula");

  const langHandleChange = (event) => {
    setLang(event.target.value);
  };

  const themeHandleChange = (event) => {
    setTheme(event.target.value);
    console.log(theme + " in select.js");
  };

  React.useEffect(() => {
    props.setMode(theme);
  }, [theme, props]);

  return (
    <div>
      {/* Language */}
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Lang </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={lang}
          value={lang}
          label="Age"
          onChange={langHandleChange}
        >
          <MenuItem value={"python"}>Python 3</MenuItem>
          <MenuItem value={"java"}>Java</MenuItem>
          <MenuItem value={"javascript"}>Javascript</MenuItem>
          <MenuItem value={"c_cpp"}>C++</MenuItem>
          <MenuItem value={"php"}>PHP</MenuItem>
          <MenuItem value={"ruby"}>Ruby</MenuItem>
          <MenuItem value={"r"}>R</MenuItem>
          <MenuItem value={"golang"}>Go Lang</MenuItem>
          <MenuItem value={"kotlin"}>Kotlin</MenuItem>
        </Select>
      </FormControl>

      {/* Theme */}
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Mode </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={theme}
          value={theme}
          label="theme"
          onChange={themeHandleChange}
        >
          <MenuItem value={"dracula"}>Dracula</MenuItem>
          <MenuItem value={"ambiance"}>Ambiance</MenuItem>
          <MenuItem value={"github"}>Github</MenuItem>
          <MenuItem value={"eclipse"}>Eclipse</MenuItem>
          <MenuItem value={"monokai"}>Monokai</MenuItem>
          <MenuItem value={"cobalt"}>Cobalt</MenuItem>
          <MenuItem value={"solarized_light"}>Solarized Light</MenuItem>
          <MenuItem value={"solarized_dark"}>Solarized Dark</MenuItem>
          <MenuItem value={"gob"}>Green on black</MenuItem>
          <MenuItem value={"terminal"}>Terminal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
