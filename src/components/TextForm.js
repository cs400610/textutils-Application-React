import React ,{useState}from 'react'

export default function TextForm(props) {
    const upClickHandle = () => {       /*function created*/
        console.log("Uppercase Button was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Upper Button has been Clicked","success")

    }
    const downClickHandle = () => {
        console.log("Lower Case was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lower Button has been Clicked","success");

    }
    const clearClickHandle = () => {
        console.log("Clear Button was clicked");
        let clear_Text='';
        setText(clear_Text);
        props.showAlert("Clear Button has been Clicked","success");
        document.title="ClearButton -TextUtils"

    }
    const handleOnChange = (event) => {        /*Used event parameter to implement event.target.value to write anything in the text area*/
        console.log("Handle Button was clicked");
        setText(event.target.value);
    }

    const copyClickHandle = () =>{
       
        navigator.clipboard.writeText(text);
        props.showAlert("Copy Button has been Clicked","success");

    }

    const removeSpaceClickHandle = () =>{
        let newText=text.split((/[  ]+/));  /*used regex of javascript*/
        setText(newText.join(" "));
        props.showAlert("Remove Spaces Button has been Clicked","success");
    }
    // Set The State(useState)
    const[text,setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#13466e'}}>
            <h2>{props.name}</h2>
            <div className="mb-3">
                <label htmlFor="My-Container" className="form-label">{props.text1}</label>
                <textarea className="form-control "style={{color:props.mode==='dark'?'white':'#13466e',backgroundColor:props.mode==='dark'?'#13466e':'white'}} id="My-Container" value={text}  rows="5" onChange={handleOnChange}></textarea>
            </div>
            <div className="btn-container">
            <button className="btn btn-danger mx-1 my-1" disabled={text.length===0}onClick={upClickHandle}>Convert to UpperCase</button>
            <button className="btn btn-danger" disabled={text.length===0} onClick={downClickHandle}>Convert to Lowercase</button>
            <button className="btn btn-danger mx-1 my-1" id="clear_button"disabled={text.length===0} onClick={clearClickHandle}>Clear Text</button>
            <button className="btn btn-danger mx-1 my-1" id="copy_button"disabled={text.length===0} onClick={copyClickHandle}>Copy Text</button>
            <button className="btn btn-danger mx-1 my-1" id="remove_spaces_button" disabled={text.length===0}onClick={removeSpaceClickHandle}>Remove Extra Spaces</button>
            </div>
        </div>

        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#13466e'}}>
            <h3><u> Text-Summary </u></h3>
            <p>Text contain : <br/>{text.length} <b>Characters</b> <br/>{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length}<b> Words</b></p>
            <p>Want {0.08 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minutes To Read This Words</p>

            <h4>PREVIEW TEXT:</h4>
            <p>{text.length>0?text:"Write Something in the text-area to PREVIEW the text...."}</p>
        </div>
        </>
    )
}


TextForm.defaultProps={
    name:'This is my Default form',
    text1:'This is my mini Query text'
}