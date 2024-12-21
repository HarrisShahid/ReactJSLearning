import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCase = ()=>{
        setText(Text.toUpperCase());
    }
    const handleLowerCase = ()=>{
        setText(Text.toLowerCase());
    }
    const handleClear = ()=>{
        setText("");
    }
    const handlOnChange = (event)=>{
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(Text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else if(toogle.textContent != "Speak"){
            toogle.innerHTML = "Speak"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const [Text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myText" onChange={handlOnChange} value={Text} rows="12">
                </textarea>
            </div>
            <div className='column'>
                <button className="btn btn-primary mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary mx-3" onClick={handleClear}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
            </div>
        </div>
        <div className="container my-2">
            <h3>Your Text Summary</h3>
            <p>{Text.split(" ").length} words, {Text.length} characters</p>
            <h3>Preview</h3>
            <p>{Text}</p>
        </div>
        </>
    )
}

