import React from "react";
import "./about.css";
import family from "../../assets/family.svg";
import family2 from "../../assets/family2.svg";
import mission from "../../assets/mission.svg";
import mission2 from "../../assets/mission2.svg";
import vision from "../../assets/vision.svg";
import price from "../../assets/price.svg";

function About() {
  return (
    <div className="container">
      <h1 id='about' className="h1-about ">Sobre a empresa</h1>
      <div className="d-flex p-2 bd-highlight">
        <img
          className="img-about "
          src={family}
          alt="logo family"
          width="100"
        />
        <p className="p-about">
          Somos uma empresa familiar, fundada em 2017, com intuito de levar aos
          clientes a experiência técnica e também comercial de mais de 12 anos
          de vivência no mercado industrial de limpeza e manufatura Brasileiro.
        </p>
      </div>
      <div className="d-flex p-2 bd-highlight">
        <p className="p-about">
          Essa vivência é aplicada no nosso dia a dia, visando o melhor
          atendimento aos nossos clientes e os melhores resultados na
          higienização e impermeabilização de estofados em geral.
        </p>
        <img
          className="img-about "
          src={family2}
          alt="logo family"
          width="100"
        />
      </div>
      <h1 className="h1-about">Missão</h1>
      <div className="d-flex p-2 bd-highlight">
        <img
          className="img-about "
          src={mission}
          alt="logo family"
          width="100"
        />
        <p className="p-about">
          Nossa missão como empresa e levar aos nossos clientes os melhores
          métodos, produtos, técnicas e equipamentos. Visando sempre os melhores
          resultados na higienização e impermeabilização dos estofados de nossos
          clientes,
        </p>
      </div>
      <div className="d-flex p-2 bd-highlight">
        <p className="p-about">
          para que esses por sua vez possam desfrutar do melhores momentos em
          família sem a preocupação com os males causados pela sujidade nos
          estofados.
        </p>
        <img
          className="img-about "
          src={mission2}
          alt="logo family"
          width="100"
        />
      </div>
      <div className="d-flex p-2 bd-highlight">
        <img
          className="img-about "
          src={vision}
          alt="logo family"
          width="100"
        />
        <p className="p-about">
          <strong>Visão :</strong> Nossa visão além de ser a maior empresa de higienização e
          impermeabilização do Brasil, nós também buscamos criar novos métodos e
          técnicas para a realização de um trabalho limpo e seguro tanto para o
          cliente, quanto para nossos profissionais.
        </p>
      </div>
      <div className="d-flex p-2 bd-highlight">
        <p className="p-about">
          <strong>Valores :</strong> Sempre pensamos e agimos como donos; Ética
          é inegociável. Resultados; Superação e confiança; Respeito à vida, às
          pessoas e ao Meio Ambiente; Ética e transparência; Humanismo;
          Criatividade; Equilíbrio; Transparência.
        </p>
        <img
          className="img-about "
          src={price}
          alt="logo family"
          width="100"
        />
      </div>
    </div>
  );
}

export default About;
