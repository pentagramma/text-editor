
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
function App() {
  const[mode, setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
 
  const toggleMode=()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#453d24';
      showAlert(": Dark mode has been enabled","success");
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(": Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title='TextEditor' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
     <TextForm showAlert={showAlert} heading='Text Converter' mode={mode}/>
      {/* <About/> */}
      </div>
      
     </>
  );
}

export default App;
