import TextareaAutosize from "@mui/material/TextareaAutosize";

const Input = (props) => {
  return (
    <div style={{ minHeight: "7vh" }}>
      <b>Input</b>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        style={{ width: "99%", maxHeight: "100%" , 'fontSize': '17px',
         'backgroundColor': '#121212', 'color': 'white', 'borderRadius': "5px", 'marginTop': '3px'
         }}
      ></TextareaAutosize>
    </div>
  );
};

export default Input;
