import React, { useState } from "react";
import CardGaleries from "./CardGaleries";
import "./galeries.css";

function Galeries() {
    const[handleChange, setHandleChange] = useState('')
  return (
    <div className="container">
      <div className="cont-div">
        <h1 id='galeries' className="h1-galeries">
          Veja as fotos e videos de nossos trabalhos
        </h1>
        <div className="d-flex justify-content-center">
          <span
            onClick={() => setHandleChange('fotos')}
            className="span-galeries shadow-lg p-3 mb-5 bg-white rounded"
          >
            FOTOS
          </span>
          <span
            onClick={() => setHandleChange("videos")}
            className="span-galeries shadow-lg p-3 mb-5 bg-white rounded"
          >
            VIDEOS
          </span>
        </div>
        <CardGaleries  value={handleChange}/>
      </div>
    </div>
  );
}

export default Galeries;
