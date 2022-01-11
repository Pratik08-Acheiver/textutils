import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 3000);

  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090a1f'
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      }, 2300);
      setInterval(() => {
        document.title = 'Install TextUtils  Now'
      }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#82b9e0'
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils - Light Mode'


    }
  }


  return (
    <>
     {/* <Navbar title="Textutils2" aboutText="About me"/> */}
     {/* <Navbar/> */}
     <Router>
     <Navbar title="Textutils2" aboutText="About me" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/> 
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
     <TextForm heading="Enter the text to analysise below " showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
     </div>
     </Router>
    </>
  );
  }

export default App;
