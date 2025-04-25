/*

Lista de cosas a añadir:
- Importar react
- Importar los archivos
- export default ComplexInfo

Lista de cosas a modificar:
- Toda instancia de class a className
- Toda instancia de imagen a esto: <img src={idImagen} className="img-fluid rounded-top" alt=""/> */

import React from "react";
import check from "../img/assets_index/check.png";
import groupmini from "../img/assets_index/group.png";
import powermini from "../img/assets_index/power.jpg";
import personalmini from "../img/assets_index/personal.png";

const Details = () => {
    return (
        <div className="container-fluid p-5 text-white text-center bg-darker">
            <div className="container mt-5">

                <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <br />
                        <h1 className="left"><b>SESIONES EN GRUPO</b></h1><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Sesiones de 1h
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Ideal para principiantes de todas las edades
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Incluye rutina de calentamiento
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Satisfacción y diversión garantizadas
                        </p><br />
                    </div>

                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <div className="border rounded justify-content-center">
                            <div className="image-container">
                                <img src={groupmini} className="img-fluid rounded-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <div className="border rounded justify-content-center">
                            <div className="image-container">
                                <img src={powermini} className="img-fluid rounded-top" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <br /><br />
                        <h1 className="left"><b>POWERLIFTING</b></h1><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Equipamiento de última generación
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Pesas de 5 a 150kg
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Apto para todos los niveles de powerlifting
                        </p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Acceso a fisioterapia para lesiones menores incluido con nuestra subscripción
                        </p><br />
                    </div>
                </div>

                <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <br />
                        <h1 className="left"><b>ENTRENAMIENTO PERSONAL</b></h1><br />
                        <p className="left">Nuestro personal incluye a entrenadores en las siguientes categorías:</p><br />
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Pérdida de peso
                        </p>
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> CrossFit
                        </p>
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Powerlifting
                        </p>
                        <p className="left">
                            <img src={check} className="img-fluid rounded-top" height="20" width="20" alt="" /> Boxeo
                        </p>
                    </div>

                    <div className="col-md-6 col-sm-12" style={{ marginBottom: "15px" }}>
                        <div className="border rounded justify-content-center">
                            <div className="image-container">
                                <img src={personalmini} className="img-fluid rounded-top" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
