// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './compnents/About';
import Navbar from './compnents/Navbar';
import TextForm from './compnents/TextForm';
import Alert from './compnents/Alert';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alerts, setAlerts] = useState(null);

  const showAlert = (message, type) =>{
    setAlerts({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlerts(null);
    }, 2000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2e3134'
      showAlert("Dark Mode has been enabled", "Success");
      showToast("Your Theme is dark", "top-center")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "Success");
      showToast("Your Theme is Light", "top-center")
    }
  }
  const showToast = (msgs, postn)=>{
    toast.success(msgs,{
                position: postn,
                Limit: 1,
                autoClose: 1000
            } );
  }
  return (
    <>
    <Router>
    <Navbar
     person={{ 
          name: 'Harris', 
          names: 'Shahid'
        }}
        mode={mode}
        toggleMode = {toggleMode}
         />
         <Alert alerts = {alerts}/>
         <div className="container my-3">
         </div>
         <Routes>
            <Route path='/about' element = {<About/>} >
            </Route>
            <Route path='/home'
            element = {<TextForm heading = "Enter the text  to analyze" mode={mode} showAlert = {showAlert} showToast = {showToast} />}>
            </Route>
         </Routes>
         </Router>
    </>
  );
}

export default App;
