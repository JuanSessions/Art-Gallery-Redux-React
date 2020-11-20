import React from "react"
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar" 
import Routes from "./components/Routes"


function App() {
  //const isLogged = useSelector(state => state.isLogged);
  //const dispatch = useDispatch();

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes />
    
      {/* {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""} */}
      
    </div>
    </BrowserRouter>
  );
}

export default App;
