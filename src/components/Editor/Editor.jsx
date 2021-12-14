import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import classes from './Editor.module.css'

function onChange(newValue) {
  console.log("change", newValue);
}

// Render editor
const Editor = () => {
  return (
    <AceEditor
      mode="java"
      theme="github"
      className={classes.aceEditor}
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;
