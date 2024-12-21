// import logo from './logo.svg';
import './App.css';
import Navbar from './compnents/Navbar';
import TextForm from './compnents/TextForm';

function App() {
  return (
    <>
    <Navbar
     person={{ 
          name: 'Harris', 
          names: 'Shahid'
        }}
         />
         <div className="container my-3">

        <TextForm heading = "Enter the text to analyze"/>
         </div>
    </>
  );
}

export default App;
