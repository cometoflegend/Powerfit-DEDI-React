import React from "react";
import fb from "../img/socialNetworks/Pfacebook.png";
import twitter from "../img/socialNetworks/Ptwitter.png"; // Me he contenido las ganas de poner "import xitter", es bastante más descriptivo de la plataforma que el nombre actual.
import yt from "../img/socialNetworks/Pyoutube.png"; 
import insta from "../img/socialNetworks/Pinstagram.png"; 

const Footer = () => {
    return (

        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">

        <footer>
            <h6 className="footerTitle">PowerFit™</h6>
            <ul className="horizontalMenuList">
                <li>Home</li>
                <li>Cursos</li>
                <li>Máquinas</li>
                <li>Cuotas</li>
                <li>Reservas</li>
                <li>Contacto</li>
            </ul>
            <ul className="socialNetworks">
                <li><img src={twitter} width="80%" className="logo" alt="Twitter"/></li>
                <li><img src={insta} width="80%" className="logo" alt="instagram"/></li>
                <li><img src={fb} width="80%" className="logo" alt="Facebook"/></li>
                <li><img src={yt} width="80%" className="logo" alt="YouTube"/></li>
            </ul>
        </footer>
    </nav>

    );
};

export default Footer;
