import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handelClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handelExtraSpaceClick = () => {
    // console.log("i am copy");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handelCopyClick = () => {
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 btn-sm" onClick={handelUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1 btn-sm" onClick={handelLoClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 btn-sm"
          onClick={handelClearClick}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-1 btn-sm"
          onClick={handelCopyClick}
        >
          Copy To ClipBoard
        </button>
        <button
          className="btn btn-primary mx-1 btn-sm"
          onClick={handelExtraSpaceClick}
        >
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
