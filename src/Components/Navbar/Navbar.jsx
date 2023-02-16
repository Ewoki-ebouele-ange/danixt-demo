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

    const hamburger = document.querySelector(".hamburger");
    const ulNavbar = document.querySelector(".nav-ul");

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("actived");
        ulNavbar.classList.toggle("actived");
    })

    document.querySelectorAll(".active").forEach(n => n.addEventListener("click", ()=>{
        hamburger.classList.remove("actived");
        ulNavbar.classList.remove("actived");
    }))
    
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
            <div className="hamburger">
               <span className="bar"></span>
               <span className="bar"></span> 
               <span className="bar"></span> 
            </div>
            <div className="img-logo">
                <img src={Img} alt="Danixt-img" />
            </div>
            <div className="head-link">
                <ul className="nav-ul">
                    <li className="nav-item">
                    <a href="#"> Accueil</a>
                    </li>
                    <li className="nav-item">
                       <a href="#"> Ressources</a>

                        <ul>
                            <li> <a href="#">Guide du vendeur</a></li>
                            <li><a href="#">Boutiques et tarifs</a></li>
                            <li><a href="#">Points de livraison</a></li>
                            <li><a href="#">Cartes cadeaux Danixt</a></li>
                            <li><a href="#">Les coupons</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#">Politique</a>
                        <ul>
                            <li> <a href="#">Confidentialité</a></li>
                            <li><a href="#">Mentions légales</a></li>
                            <li><a href="#">Politique de retour</a></li>
                            <li><a href="#">Conditions d'utilisation</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#">Carrière</a>
                    <ul>
                            <li> <a href="#">Notre culture</a></li>
                            <li><a href="#">Offres d'emplois</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                    <a href="#"> Contacts</a>
                    </li>
                    <li className="nav-item">
                    <a href="#"> Aide</a>
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