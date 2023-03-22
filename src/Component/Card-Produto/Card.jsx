import "./index.scss";


const Card = ({data}) => {
  console.log(data)
  return (
    <div className="card">
      <img src={data.imgPath} alt="Imagem do card" />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <button className="btn btn-primary">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Card;