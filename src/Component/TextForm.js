import React,{ useState } from "react";

export default function TextForm(props) {

    

    const HandledUpClick = () => {
        console.log("button clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const HandleddownClick = () => {
        console.log("button clicked." + text);
        let NewText = text.toLowerCase();
        setText(NewText);
        
    }
    
    const handledOnChange = (event) => {
        console.log("text Entered.");
        setText(event.target.value)
    }

    const [text, setText] = useState("");

  return (
    
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black',textAlign:"left"}}>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                className="form-control"
                value={text}
                onChange={handledOnChange}
                style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'light',
                color: props.mode === 'dark' ? 'white' : 'black'}}
                rows="6"></textarea>
            </div>
           

        <button disabled={text.length===0} type="submit" onClick={HandledUpClick} className="btn btn-primary m-2 p-2">
          Convert To UpperCase.
        </button>
        <button disabled={text.length===0} type="submit" onClick={HandleddownClick} className="btn btn-primary m-2 p-2">
          Convert To LowerCase.
        </button>
        
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text is below:</h1>
            <p>your text have {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time to read the text.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview "}</p>
            
        </div>
        </div>
      
    
  );
}
