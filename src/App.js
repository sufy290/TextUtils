
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react'
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
          
          msg : message,
          type : type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }



  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been enabled", "success");
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor = 'gray'
      showAlert("Light mode has been enabled", "success");
    }
  }

    
    
  return (
    
    <Router>
      <div className="App">
      
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()}/>
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route exact path="/About" component={()=><About mode={mode} />}/>
          
          <Route exact path="/" component = {()=><TextForm heading="TextForm" mode={mode} />}/>

        </Switch>
          
         
        </div>
        
      </div>
      </Router>
      
    );
  } 


export default App;
   