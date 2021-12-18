import React, { useState } from "react";
import AceEditor from "react-ace";
import Paper from "@mui/material/Paper";
import "ace-builds";
import "ace-builds/webpack-resolver";
import Beautify from "ace-builds/src-noconflict/ext-beautify";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "./acebuilds";
import langForEditor from "./langForEditor";

const Editor = (props) => {
  const [code, setCode] = useState();
  const lang = langForEditor(props.lang);

  const OnChangeHandler = (value) => {
    setCode(value);
  };

  const OnBlurHandler = () => {
    props.setCode(code);
  };

  return (
    <Paper elevation={3}>
      <AceEditor
        mode={lang}
        theme={props.mode}
        onChange={OnChangeHandler}
        onBlur={OnBlurHandler}
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
