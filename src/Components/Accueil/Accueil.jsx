import React from "react";
import "./Accueil.css";
import {GiCheckMark} from "react-icons/gi"
import {AiFillShop } from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import Banner from "../../assets/Img/banner.png"
import Shap from"../../assets/Img/shap.png"
import Lock from"../../assets/Img/lock.png"
import Feuille from"../../assets/Img/feuille.png"
import Car from"../../assets/Img/car.png"
import Ordi from"../../assets/Img/ordi-simplicite.png"


export default function Accueil(){
    return(
        <div className="accueil">
            <div className="desc-imgDesc">
                <div className="s_round-one"></div>
                <div className="s_round-two"></div>
                <div className="img-shap">
                    <img src={Shap} alt="shap" />
                </div>
                <div className="descrip">
                    <div className="le-bon-coin">Le bon coin ecommerce en Afrique</div>
                    <div className="la-plateforme">La plateforme Danixt vous offre la possibilité de :</div>
                    <div className="advant-text">
                    <GiCheckMark /> Vendre dans plusieurs pays
                    </div>
                    <div className="advant-text">
                    <GiCheckMark /> Atteindre des millions de clients
                    </div>
                    <div className="advant-text">
                    <GiCheckMark /> Suivre votre activité en temps réel
                    </div>
                    <div className="advant-text">
                    <GiCheckMark /> Augmenter votre chiffre d'affaire et vos profits
                    </div>
                    <div className="boutique">
                        <div className="create-boutique">
                            <AiFillShop className="create-img" /> Créer une boutique
                        </div>
                        <div className="visit-boutique">
                            <HiShoppingCart className="create-img"/> Visitez nos boutiques
                        </div>
                    </div>
                </div>
                <div className="image-desc">
                    <img src={Banner} alt="banner" />
                </div>
            </div>
            <div className="raison-op">
                <h2 className="text-h1">Pourquoi vendre et achéter sur danixt?</h2>
                <span className="text-explain">Que vous soyez déjà achéteur ou vendeur chez un autre partenaire de ecommerce, les avantages et la qualité de service que Danixt vous offre sont incomparables</span>
            </div>
            <div className="pub">
                <div className="image-pub">
                    <img src={Ordi} alt="computer" />
                    <h4 className="title-pub">Simplicité et flexibilité</h4>
                    <p>Les applications Danixt sont conçues de façon à être intuitives pour le client, afin qu'il ait une expérience unique et inégalable.</p>
                </div>
                <div className="image-pub">
                    <img src={Lock} alt="computer" />
                    <h4 className="title-pub">Fiabilité et sécurité</h4>
                    <p>Dans nos applications, les normes de sécurité les plus exigentes sont respectées afin de rendre chaque transaction sûre et garantie.</p>
                </div>
                <div className="image-pub">
                    <img src={Car} alt="computer" />
                    <h4 className="title-pub">Livraison rapide</h4>
                    <p>Notre modèle d'affaire repose sur la minimisation des délais de livraison. Chaque commande doit être livrée dans les 5 jours qui suivent.</p>
                </div>
                <div className="image-pub">
                    <img src={Feuille} alt="computer" />
                    <h4 className="title-pub">Stratégie marketing</h4>
                    <p>Notre équipe BI analyse tous les mois les données de ventes et fournit à chaque vendeur un rapport pour améliorer sa stratégie d'affaire.</p>
                </div>
            </div>
        </div>
    );
}