import React from "react";
import "./Accueil.css";
import {GiCheckMark} from "react-icons/gi"
import {AiFillShop } from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {SiHomeassistantcommunitystore} from "react-icons/si"
import Banner from "../../assets/Img/banner.png"
import Shap from"../../assets/Img/shap.png"
import Lock from"../../assets/Img/lock.png"
import Feuille from"../../assets/Img/feuille.png"
import Car from"../../assets/Img/car.png"
import Ordi from"../../assets/Img/ordi-simplicite.png"
import btq from"../../assets/Img/btq-img.png"
import portail from"../../assets/Img/portail.png"
import portailad from"../../assets/Img/admin_port.png"

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
            <div className="A-propos">
                <div className="a-propos-text">
                    <div className="apropos-title">À propos de nous</div>
                    <div className="propos-text">Danixt Group est une jeune startup africaine basée au Cameroun, spécialisée dans le commerce en ligne et la promotion des marques africaines. Notre objectif est d'améliorer la pratique du ecommerce en Afrique en priorisant les besoins du client et en optimisant les chaines de distribution du vendeur. À fin d'atteindre cet objectif, nous avons élaboré un modèle d'affaire basé sur plusieurs hyperparamètres qui reflètent la réalité des pays africains :</div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Les moyens de paiement locaux et internationaux
                    </div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Le débit moyen d'internet dans les pays africains
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Les états globaux des infrastructures logistiques
                    </div>
                    <div className="propos-text">Sur la base de ce modèle d'affaire, nous avons bati aux moyens des technologies les plus robustes un ensemble de plateformes fiables et sécuritaires, satisfaisant pour les clients et les vendeurs.</div>
                </div>
                <div className="i-frame">
                <iframe src="https://www.youtube.com/embed/YEsAoVPulVA" title="Dribbles Humiliants dans le Foot 2023 ᴴᴰ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="specificite-app">
                <span className="text-h1">Spécificité de nos applications</span>
                Notre univers de commerce électronique repose sur une spécification des applications. Chaque application est optimisée pour fournir un service précis afin de mieux répondre à nos normes de simplicité, de flexibilité et de sécurité.
            </div>
            <div className="boutiq">
                <div className="boutiq-text">
                    <div className="apropos-title">Boutiques</div>
                    <div className="propos-text">Cette application est l'environnement par lequel le client interagit avec Danixt et ses vendeurs. Les produits qui y sont publiés ont préalablement été validés par nos équipes de modération et de gestion de contenu. À travers cette application, le client peut :</div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> S'inscrire et activer son compte
                    </div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Achéter des produits et suivre ses commades
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Achéter et activer des cartes cadeaux
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Accéder aux promotions et utiliser des coupons
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Donner son avis sur les produits et les boutiques
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Et plus encore ...
                    </div>
                </div>
                <div className="boutiq-img">
                    <div className="pulse">
                        <HiShoppingCart className="create-img"/>
                    </div>
                    <img src={btq} alt="btq" />
                </div>
            </div>
            <div className="boutiq gp_1rem">
                <div className="boutiq-img">
                    <div className="pulse">
                        <SiHomeassistantcommunitystore className="create-img"/>
                    </div>
                    <img src={portail} alt="portail" />
                </div>
                <div className="boutiq-text">
                    <div className="apropos-title">Portail de vente</div>
                    <div className="propos-text">Cette application est dédiée aux vendeurs et permet à ceux-ci d'effectuer avec la plus grande simplicité toutes les opérations dont ils ont besoin au quotidien pour suivre leurs activités. Ainsi, ils peuvent :</div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Créer les boutiques et charger les produits
                    </div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Gérer les commandes, les stocks et les bénéfices
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Créer et gérer les coupons de réduction
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Employer et manager des collaborateurs
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Communiquer avec les administrateurs
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Et plus encore ...
                    </div>
                </div>
                
            </div>
            <div className="boutiq">
                <div className="boutiq-text">
                    <div className="apropos-title">Portail Admin</div>
                    <div className="propos-text">Il s'agit de l'application par laquelle les équipes Danixt administrent l'ensemble des plateformes. La gestion sécuritaire de tous les modules s'effectuent ici. Elle permet entre autre de :</div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Gérer les vendeurs et leurs boutiques
                    </div>
                    <div className="advant-text-black">
                    <GiCheckMark className="just" /> Valider la conformité des produits et des stocks
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Gérer clients, les commandes et les livraison
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Gérer les cartes cadeaux et les coupons de réduction
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Gérer les chaines de distribution et les politiques
                    </div>
                    <div className="advant-text-black mb_5">
                    <GiCheckMark className="just" /> Et plus encore ...
                    </div>
                </div>
                <div className="boutiq-img">
                    <div className="pulse_blue">
                        <HiShoppingCart className="create-img"/>
                    </div>
                    <img src={portailad} alt="admin" />
                </div>
            </div>
        </div>
    );
}