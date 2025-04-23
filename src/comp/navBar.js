import React from "react";
import logo from "../img/logo/logo.png";

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        
        <div className="collapse navbar-collapse justify-content-end container-fluid">

        <img src={logo} width="100px" class="logo" alt=""/>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">

                <ul className="navbar-nav me-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-link whiteText" role="button" href="#">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle whiteText" role="button" href="#"
                            data-bs-toggle="dropdown">Servicios</a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="cursos.js" role="button">Cursos</a></li>
                            <li><a className="dropdown-item" href="maquinas.js" role="button">Máquinas</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-link whiteText" role="button" href="cuotas.js">Cuotas</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-link whiteText" role="button" href="reservas.js">Reservas</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-link whiteText" role="button" href="contacto.js">Contacto</a>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
            );
        };

        export default Navbar;