import React, {useState} from 'react'

/* 
  Text is the input function and the thing inside use state is rendered by default. setText function is used whenever the text function has to be updated.
*/

/* 
  Text cannot be changed directly like a number, function has to be used, the setText one
*/


export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was selected " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  }

  const handleLoClick = () => {
    //console.log("Upper case was selected " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleReverseClick = () => {
    let newText = "";
    for(let i = text.length - 1; i>=0; i--) {
      newText += text[i];
    }
    setText(newText);
    props.showAlert("Text reversed", "success");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  }

  const[text, setText] = useState(' ')
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? 'grey': 'white',
        color: props.mode === 'dark'? 'white': '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleReverseClick}>
          Reverse Text
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(word => word !== "").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word !== "").length} Minutes to finish reading</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview here'}</p>
      </div>
    </> 
  )
}
