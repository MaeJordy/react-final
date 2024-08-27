import React from "react";
import logo from '../images/0001.jpg'
import Tiempo from './Tiempo'
import '../App.css'
function Cabeza(){
    return(
     <>
     <header>
        <div className="logito">
            <img src={logo} alt="logo" />
        </div>
        <div className="tiempo">
            <Tiempo />
        </div>
     </header>
     </>
    )
}
export default Cabeza;