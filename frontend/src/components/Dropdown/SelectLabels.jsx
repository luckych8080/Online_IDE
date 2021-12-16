import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectLabels(props) {
  const [lang, setLang] = React.useState("python3");
  const [theme, setTheme] = React.useState("dracula");

  const langHandleChange = (event) => {
    setLang(event.target.value);
  };

  const themeHandleChange = (event) => {
    setTheme(event.target.value);
  };

  React.useEffect(() => {
    props.setMode(theme);
    props.setLang(lang);
  }, [theme, lang, props]);

  return (
    <React.Fragment>
      {/* Language */}
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Lang </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={lang}
          label="Lang"
          onChange={langHandleChange}
        >
          <MenuItem value={"python3"}>Python 3</MenuItem>
          <MenuItem value={"python2"}>Python 2</MenuItem>
          <MenuItem value={"java"}>Java</MenuItem>
          <MenuItem value={"c"}>C</MenuItem>
          <MenuItem value={"cpp"}>C++</MenuItem>
          <MenuItem value={"cpp14"}>C++ 14</MenuItem>
          <MenuItem value={"cpp17"}>C++ 17</MenuItem>
          <MenuItem value={"ruby"}>Ruby</MenuItem>
          <MenuItem value={"php"}>PHP</MenuItem>
          <MenuItem value={"go"}>Go Lang</MenuItem>
          <MenuItem value={"kotlin"}>Kotlin</MenuItem>
        </Select>
      </FormControl>

      {/* Theme */}
      <FormControl sx={{ m: 1, minWidth: 100, maxWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={theme}
          label="Theme"
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
          <MenuItem value={"gob"}>GOB</MenuItem>
          <MenuItem value={"terminal"}>Terminal</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
