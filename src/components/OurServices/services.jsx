import React, { useState } from "react";
import "./services.css";
import car from "./car.png";
import cama from "./cama.png";
import couch from "./couch.png";
import cadeira from "./cadeira.png";
import Card from "./Card";

function Services() {
  const [classImg, setClassImg] = useState("");

  return (
      <div class="container bg-color w-auto p-3">
        <h1 className="h1-title-1 mt-3">Nossos Serviços</h1>

        <h4 className="d-flex align-items-start h4-cat">categorias</h4>

          <div class="d-flex justify-content-center pt-2 ">
            <div
              onMouseMove={() => setClassImg("active-red")}
              className="d-flex mr-2 shadow p-3 mb-5 card-Color-red flex-column justify-content-center"
            >
              <img src={couch} alt="logo  carro" width="20" />
              <p className='p-icons'>Sofás</p>
            </div>
            <div
              onMouseMove={() => setClassImg("active-green")}
              className="d-flex mr-2 shadow p-3 mb-5 card-Color-green flex-column justify-content-center"
            >
              <img src={cama} alt="logo  carro" width="20" />
              <p className='p-icons'>Colchões</p>
            </div>
            <div
              onMouseMove={() => setClassImg("active-blue")}
              className="d-flex mr-2 shadow p-3 mb-5 card-Color-blue flex-column justify-content-center"
            >
              <img src={cadeira} alt="logo  carro" width="20" />
              <p className='p-icons'>Estofados</p>
            </div>
            <div
              onMouseMove={() => setClassImg("active-orange")}
              className="d-flex shadow p-3 mb-5 card-Color-orange flex-column justify-content-center"
            >
              <img src={car} alt="logo  carro" width="20" />
              <p className='p-icons'>Veiculos</p>
            </div>
          </div>

        <Card classImg={classImg} />
      </div>
  );
}

export default Services;
