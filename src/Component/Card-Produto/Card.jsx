import React from 'react'
import "./index.scss";
import img from "../../../public/burguer.svg"

const Card = () => {
  return (
    <div className="card">
      <img src={img} alt="Imagem do card" />
      <div className="card-body">
        <h5 className="card-title">Título do Card</h5>
        <button className="btn btn-primary">Adicionar</button>
      </div>
    </div>
  );
}

export default Card;