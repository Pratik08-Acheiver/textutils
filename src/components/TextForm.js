import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text";//wrong way
  // setText("new Text");/Correct way

  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLowClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}}

            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className=" btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className=" btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'grey'}}>
        <h1>Your text summmary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it"}</p>
      </div>
    </>
  );
}
