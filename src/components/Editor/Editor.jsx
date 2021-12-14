import React from "react";
import AceEditor from "react-ace";

import Paper from "@mui/material/Paper";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function onChange(newValue) {
  console.log("change", newValue);
}

// Render editor
const Editor = () => {
  return (
    <Paper elevation={3} >
      <AceEditor
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%" }}
      />
    </Paper>
  );
};

export default Editor;
