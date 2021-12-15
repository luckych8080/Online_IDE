import React from "react";
import AceEditor from "react-ace";

import Paper from "@mui/material/Paper";

import Beautify from "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-min-noconflict/ext-language_tools"
import './acebuilds'

function onChange(newValue) {
  console.log("change", newValue);
}

// Render editor
const Editor = () => {
  return (
    <Paper elevation={3} >
      <AceEditor
        mode="python"
        theme="dracula"
        onChange={onChange}
        commands={Beautify.commands}
        name="ace-editor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%" }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          highlightActiveLine: true,
          showGutter: true,
          autoScrollEditorIntoView: true,
          showPrintMargin: false,
          fontSize: "17px",
        }}
      />
    </Paper>
  );
};

export default Editor;