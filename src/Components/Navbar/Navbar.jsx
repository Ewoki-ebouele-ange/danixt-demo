import React, {useState, useEffect} from "react";
import Img from "../../assets/Img/title-app.png"
import "./Navbar.css"
import {IoIosArrowDown} from "react-icons/io"
import { NavLink } from "react-router-dom";

export default function Navbar(){

    const [currentLink, setCurrentLink] = useState(1);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);

/*window.onload = function (){
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
};*/

    useEffect(() => {
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        };

        const toggleMenu1 = () => {
          setIsMenuOpen1(!isMenuOpen1);
        };

        const dropdown = document.querySelector(".drop-down");
        const list = document.querySelector(".list");
        const hamburger = document.querySelector(".hamburger");
        const ulNavbar = document.querySelector(".nav-ul");
    
        hamburger.addEventListener("click", toggleMenu);
        dropdown.addEventListener("click", toggleMenu1);
        
        return () => {
          hamburger.removeEventListener("click", toggleMenu);
          dropdown.removeEventListener("click", toggleMenu1);
        };
      }, [isMenuOpen,isMenuOpen1]);

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
            <div className={`hamburger ${isMenuOpen ? "actived" : ""}`}>
               <span className="bar"></span>
               <span className="bar"></span> 
               <span className="bar"></span> 
            </div>
            <div className="img-logo">
                <img src={Img} alt="Danixt-img" />
            </div>
            <div className="head-link">
                <ul className={`nav-ul ${isMenuOpen ? "actived" : ""}`}>
                    <li className={currentLink === 2 ? "active" : "none"}
                        onClick={() => setCurrentLink(2)}>
                    <NavLink to="/accueil" className="nav-item">
                         Accueil 
                         <span className="span-link"></span>
                    </NavLink>
                    </li>
                    <li className={currentLink === 3 ? "active" : "none"}
                        onClick={() => setCurrentLink(3)}>
                        <NavLink to="/" className="nav-item"> 
                            Ressources <IoIosArrowDown className="drop-link" />
                            <span className="span-link"></span>
                        </NavLink>

                        <ul>
                            <span className="ul-brand"></span>
                            <li className="linkin" onClick={() => setCurrentLink(3)}> <NavLink to="/">Guide du vendeur</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(3)}><NavLink to="/">Boutiques et tarifs</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(3)}><NavLink to="/">Points de livraison</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(3)}><NavLink to="/">Cartes cadeaux Danixt</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(3)}><NavLink to="/">Les coupons</NavLink></li>
                        </ul>
                    </li>
                    <li className={currentLink === 4 ? "active" : "none"}
                        onClick={() => setCurrentLink(4)}>
                    <NavLink to="/" className="nav-item">
                        Politique <IoIosArrowDown className="drop-link" />
                        <span className="span-link"></span>
                    </NavLink>
                        <ul>
                            <span className="ul-brand"></span>
                            <li className="linkin" onClick={() => setCurrentLink(4)}> <NavLink to="/">Confidentialité</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(4)}><NavLink to="/">Mentions légales</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(4)}><NavLink to="/">Politique de retour</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(4)}><NavLink to="/">Conditions d'utilisation</NavLink></li>
                        </ul>
                    </li>
                    <li className={currentLink === 5 ? "active" : "none"}
                        onClick={() => setCurrentLink(5)}>
                    <NavLink to="/" className="nav-item">
                        Carrière <IoIosArrowDown className="drop-link"/>
                        <span className="span-link"></span>
                    </NavLink>
                    <ul>
                            <span className="ul-brand"></span>
                            <li className="linkin" onClick={() => setCurrentLink(5)}> <NavLink to="/">Notre culture</NavLink></li>
                            <li className="linkin" onClick={() => setCurrentLink(5)}><NavLink to="/">Offres d'emplois</NavLink></li>
                        </ul>
                    </li>
                    <li className={currentLink === 6 ? "active" : "none"}
                        onClick={() => setCurrentLink(6)}>
                    <NavLink to="/" className="nav-item"> 
                        Contacts
                        <span className="span-link"></span>
                    </NavLink>
                    </li>
                    <li className={currentLink === 7 ? "active" : "none"}
                        onClick={() => setCurrentLink(7)}>
                    <NavLink to="/" className="nav-item"> 
                        Aide
                        <span className="span-link"></span>
                    </NavLink>
                    </li>
                </ul>
                <div className={`drop-down ${isMenuOpen1 ? "show" : ""}`}>
                    <div className="wrapper">
                        <div className="selected">Français</div>
                    </div>
                    <IoIosArrowDown className="arrow" />
                    <div className={`list ${isMenuOpen1 ? "show" : ""}`}>
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
