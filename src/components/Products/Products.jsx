import React from "react";
import logo1 from "./logo1.png";
import logo2 from '../Products/logo2.png';
import './products.css'

function Products() {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <h1 id='products' className='h1-title'>Produtos utilizados</h1>
      <div className="d-flex p-2 bd-highlight">
        <img className='img-icons' src={logo1} alt="logo products" />
        <p className='p-phrases'>
        Produtos utilizados : Flotadores, desengordurantes, alvejantes, higienizadores, finalizadores e etc. Todos produtos são de uso profissional nacionais 
        e importados com registro no órgão regulamentador Anvisa.
        </p>
      </div>
      <div className="d-flex p-2 bd-highlight">
        <img className='img-icons' src={logo2} alt="logo products" />
        <p className='p-phrases'>
          <br></br> 
          Nossos produtos não agridem o meio ambiente,
           não causam danos aos tecidos e não causam danos a pessoas e animais.
        </p>
      </div>
    </div>
  );
}

export default Products;
