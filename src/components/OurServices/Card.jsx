import React, { useEffect, useState } from "react";
// import cardData from "./cardData";
import "./card.css";
import image1 from "./sofa.jpg";
import image2 from "./col.jpg";
import image3 from "./cadeiras.jpg";
import image4 from "./car2.jpg";

function Card({ classImg }) {
  const [imgCard, setImgCard] = useState("");

  useEffect(() => {
    setImgCard(classImg);
  });

  if (imgCard === "active-red") {
    return (
      <div className="container-fluid">
        <div className="sofa d-flex flex-column ">
          <h1 className="title">Higienização de Sofás</h1>
          <p className="paragraph">
            A limpeza e higienização de sofás é necessaria para remover o
            acúmulo de ácaros, gorduras, poeira, fungos e bactérias, além de
            possiveis odores desagradáveis. A higienização e realizada com
            produtos de peróxido de hidrogenio que eliminam fungos e bactérias ,
            alem de limapar e realçar a cor do estofado aumentando a sua vida
            útil.
          </p>
        </div>
        <div className='d-flex justify-content-center color'>
            <img className="img-fluid image" src={image1} alt="falcon sofa"  />
          </div>
      </div>
    );
  } else if (imgCard === "active-green") {
    return (
      <div className="container-fluid">
        <div className="colchao d-flex flex-column">
          <h1 className="title">Higienização de Colchões</h1>
          <p className="paragraph">
            A higienização de colchão é indicada para pessoas alergicas e tambem
            para manter a estética do colchão, pois com o suor os colchões vao
            perdendo a sua cor original e com isso ficam com manchas em sua
            superficie que também ajudam a enfraquecer as fibras do tecido,
            diminuindo a vida útil do estofado. o ideal e fazer a higienização
            de 7 em 7 meses para previnir que isso que isso aconteça!
          </p>
        </div>
        <div className='d-flex justify-content-center color'>
            <img className="img-fluid image" src={image2} alt="falcon sofa"  />
          </div>
      </div>
    );
  } else if (imgCard === "active-blue") {
    return (
      <div className="container-fluid">
        <div className="cadeira d-flex flex-column">
          <h1 className="title">Higienização de Estofados</h1>
          <p className="paragraph">
            A limpeza e higienização de Cadeiras é necessaria para remover o
            acúmulo de ácaros, gorduras, poeira, fungos e bactérias, além de
            possiveis odores desagradáveis. A higienização e realizada com
            produtos de peróxido de hidrogenio que eliminam fungos e bactérias ,
            alem de limapar e realçar a cor do estofado aumentando a sua vida
            útil.
          </p>
        </div>
        <div className='d-flex justify-content-center color'>
            <img className="img-fluid image" src={image3} alt="falcon sofa"  />
          </div>
      </div>
    );
  } else if (imgCard === "active-orange") {
    return (
      <div className="container-fluid">
        <div className="veiculos d-flex flex-column">
          <h1 className="title">Higienização de Veiculos</h1>
          <p className="paragraph">
            A higienização de veiculos é indicada tampbem para pessoas
            alergicas, pois o acumulo de poeira e sujeira é muito grande e com
            isso a tosse seca e outra doenças alérgicas e respiratorias podem
            desencadear no seu veiculo. levamos em cosideração tambem a estetica
            do veiculo que devemos manter para nao depreciar o valor do mesmo.
            Na hora de vender isso conta muito!
          </p>
        </div>
        <div className='d-flex justify-content-center color'>
            <img className="img-fluid image" src={image4} alt="falcon sofa"  />
          </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="sofa d-flex flex-column">
          <h1 className="title">Higienização de Sofás</h1>
          <p className="paragraph">
            A limpeza e higienização de sofás é necessaria para remover o
            acúmulo de ácaros, gorduras, poeira, fungos e bactérias, além de
            possiveis odores desagradáveis. A higienização e realizada com
            produtos de peróxido de hidrogenio que eliminam fungos e bactérias ,
            alem de limapar e realçar a cor do estofado aumentando a sua vida
            útil.
          </p>
        </div>
        <div className='d-flex justify-content-center color'>
            <img className="img-fluid image" src={image1} alt="falcon sofa"  />
          </div>
      </div>
    );
  }
}

export default Card;
