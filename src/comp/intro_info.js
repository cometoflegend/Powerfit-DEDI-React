/* Comentado todo para evitar problemas a la hora de subirlo a github.

Lista de cosas a añadir:
- Importar react
- Importar los archivos
- export default BasicInfo

Lista de cosas a modificar:
- Toda instancia de class a className
- Toda instancia de imagen a esto: <img src={idImagen} className="img-fluid rounded" alt=""/> */

import React from "react";
import mainpic from "../img/assets_index/mainpic.png";
import group from "../img/assets_index/Rectangle-34-1-1024x615.jpg";
import powerlift from "../img/assets_index/840_560.jpg";
import personal from "../img/assets_index/19-07-Blog-fitness-training-personal-training.jpg";

const Intro = () => {
    return (
<div className="container-fluid p-5 bg-dark text-white text-center">

<div className="border rounded border-sm">
<img src={mainpic} className="img-fluid rounded" alt=""/>
</div><br/>

<h2><b>Ofrecemos entrenamiento personalizado para múltiples disciplinas y niveles.</b></h2>

<div className="container mt-5">
    <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '15px' }}>
            <div className="border rounded">
                <div className="image-container">
                <img src={group} className="img-fluid rounded" alt=""/>
                    <div className="overlay-text">
                        <h2>SESIONES EN GRUPO</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '15px' }}>
            <div className="border rounded">
                <div className="image-container">
                <img src={powerlift} className="img-fluid rounded" alt=""/>
                    <div className="overlay-text">
                        <h2>POWERLIFTING</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12" style={{ marginBottom: '15px' }}>
            <div className="border rounded">
                <div className="image-container">
                <img src={personal} className="img-fluid rounded" alt=""/>
                    <div className="overlay-text">
                        <h2>ENTRENAMIENTO PERSONAL</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>

            );
        };

        export default Intro;