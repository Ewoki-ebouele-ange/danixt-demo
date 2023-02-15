import React from "react";
import Img from "../../assets/Img/title-app.png"
import "./Navbar.css"
import {IoIosArrowDown} from "react-icons/io"

export default function Navbar(){

    window.onload=function(){
    const dropdown = document.querySelector(".drop-down");
    const list = document.querySelector(".list");

    dropdown.addEventListener('click', ()=>{
        list.classList.toggle('show');
    })

    
}
function handleChangeFr(){
    const selected = document.querySelector(".selected");
    selected.innerHTML = 'Français'
}

function handleChangeEng(){
    const selected = document.querySelector(".selected");
    selected.innerHTML = 'English'
}


    return(
        <div className="navbar">
            <div className="img-logo">
                <img src={Img} alt="Danixt-img" />
            </div>
            <div className="head-link">
                <ul className="nav-ul">
                    <li className="nav-item">
                        Accueil
                    </li>
                    <li className="nav-item">
                        Ressources
                    </li>
                    <li className="nav-item">
                        Politique
                    </li>
                    <li className="nav-item">
                        Carrière
                    </li>
                    <li className="nav-item">
                        Contacts
                    </li>
                    <li className="nav-item">
                        Aide
                    </li>
                </ul>
                <div className="drop-down">
                    <div className="wrapper">
                        <div className="selected">Français</div>
                    </div>
                    <IoIosArrowDown className="arrow" />
                    <div className="list">
                        <div className="item">
                            <div className="text" onClick={handleChangeFr}>Français</div>
                            <div className="text" onClick={handleChangeEng}>English</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}