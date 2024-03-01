import React, { useState } from 'react'
export default function TextForm(props) {

 const handleUpClick=()=>{
  console.log('uppercase was clicked');
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert(": Text succesfully converted to uppercase","success");
 } 

 const handleLoClick=()=>{
  console.log('lowercase was clicked');
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert(": Text succesfully converted to lowercase","success");
 } 

 const handleOnChange=(event)=>{
  console.log('on change');
  setText(event.target.value);
 }
  
 const handleSpaces=()=>{
  let totSpace= (text.trim()===''?0:text.split(' ').length)-1;
  setSpace(totSpace);
  props.showAlert(": Spaces calculated succesfully","success");
 }

 const handleExtraSpaces=()=>{
  let newText= text.split(/[ ]+/);
  setText(newText.join(' '));
  props.showAlert(": Extra spaces handled succesfully","success");
 }

 const clearText=()=>{
  let text=document.getElementById('myBox');
  text.value="";
  props.showAlert(": Text cleared succesfully","success");

 }  


 
  
 const[text, setText]= useState('');
 const[space, setSpace]= useState('0');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea  value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'gray':'white'}}></textarea>
      </div>
      <button className='btn btn-warning mx-2' style={{backgroundColor: props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}} onClick={handleUpClick}>Convert to Uppercase</button>

      <button className='btn btn-warning mx-2' style={{backgroundColor: props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}} onClick={handleLoClick}>Convert to Lowercase</button>

      <button className='btn btn-warning mx-2' style={{backgroundColor: props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}} onClick={handleSpaces}>Calculate Spaces</button>

      <button className='btn btn-warning mx-2' style={{backgroundColor: props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}} onClick={handleExtraSpaces}>Handle Extra spaces</button>
      <button className='btn btn-warning mx-2' style={{backgroundColor: props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}} onClick={clearText}>Clear Text</button>
    </div>
    <div className='my-3 mx-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.trim()===''?0:text.split(' ').length} words and {text.length} characters.</p>
      <p>{0.008* text.split('').length} minutes to read </p>
      
       <p onClick={handleSpaces}>No. of spaces: {space}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box"}</p>
    </div>
    </>
  )
}

