import React from "react";
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import '../App.css'

function Pie (){
    return(
        <>
        <footer className="pie">
            <div className="subs">
                <h2>www.delipizza.com</h2>
                <h2>Siguenos en Facebook</h2>
            </div>
            <div className="redes">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
            </div>
        </footer>
        </>
    )
}
export default Pie;