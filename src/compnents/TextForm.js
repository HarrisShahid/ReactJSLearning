import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function TextForm(props) {       
    const handleUpperCase = ()=>{
        setText(Text.toUpperCase());
        if(Text !== ""){
        props.showToast("Your text is in UpperCase", "top-right")
        }
    }
    const handleLowerCase = ()=>{
        setText(Text.toLowerCase());
        if(Text !== ""){
            props.showToast("Your text is in LowerCase", "top-right")
            }
    }
    const handleClear = ()=>{
        setText("");
        if(Text!== ""){
        props.showToast("Cleared Successfully", "top-right")
        }
    }
    const handlOnChange = (event)=>{
        setText(event.target.value);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(Text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }
    const [Text, setText] = useState("")
    const copyClips = ()=>{
        let texts = document.getElementById("myText");
        texts.select();
        navigator.clipboard.writeText(texts.value);
        if(texts.value!==''){
        toast.success("Your Text is Copied",{
            position: 'top-center',
            Limit: 1
        } );
        }
    }
    const shoot = (a, b) => {
        alert(b.type);}
    return (
        <>
        
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'?'#2e3134':'white',
                    color: props.mode==='dark'?'white':'black'}} id="myText" onChange={handlOnChange} value={Text} rows="12">
                </textarea>
            </div>
            <div className='column'>
                <button className="btn btn-outline-primary mx-3" onClick={handleUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-outline-primary mx-3" onClick={handleLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-outline-primary mx-3" onClick={handleClear}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
                <button className="btn btn-success mx-2 my-2" onClick={copyClips}>Copy Text</button>
                <ToastContainer limit={1} theme='dark'/>
            </div>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{Text.split(/\s+/).filter(word => word.trim() !== "").length}: words, {Text.length}: characters</p>
            <h3>Preview</h3>
            <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
            <p hi>{Text}</p>
        </div>
        </>
    )
}