import React from 'react';
import "./Home.css"
import prendas from "../assets/img-cards/prendas.jpg"
import complementos from "../assets/img-cards/complementos.jpg"
import accesorios from "../assets/img-cards/accesorios.jpg"
import cosmeticos from "../assets/img-cards/cosmeticos.jpg"


function Home(){
    return(
        <div className="home">
            <div className="card">
                <img src={prendas} className="image-card"/>
                <button>Prendas</button>
            </div>
            <div className="card">
                <img src={complementos} className="image-card"/>
                <button>Complementos</button>
            </div>
            <div className="card">
                <img src={accesorios} className="image-card"/>
                <button>Accesorios</button>
            </div>
            <div className="card">
                <img src={cosmeticos} className="image-card"/>
                <button>Cosméticos</button>
            </div>
        </div>
    );
}

export default Home;