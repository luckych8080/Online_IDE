import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [lang, setLang] = React.useState('Python');
  const [theme, setTheme] = React.useState('monkai');

  const langHandleChange = (event) => {
    setLang(event.target.value);
  };

  const themeHandleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div>
      {/* Language */}
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Lang </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={lang}
          defaultValue={lang}
          label="Age"
          onChange={langHandleChange}
        >
          <MenuItem value={"c++"}>C++</MenuItem>
          <MenuItem value={"Python"}>Python</MenuItem>
          <MenuItem value={"java"}>Java</MenuItem>
        </Select>
      </FormControl>

      {/* Theme */}
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Mode </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          // value={theme}
          defaultValue={theme}
          label="Age"
          onChange={themeHandleChange}
        >
          <MenuItem value={"vs code"}>vs code</MenuItem>
          <MenuItem value={"light"}>Light</MenuItem>
          <MenuItem value={"monkai"}>Monkai</MenuItem>
          <MenuItem value={"dark"}>Dark</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
