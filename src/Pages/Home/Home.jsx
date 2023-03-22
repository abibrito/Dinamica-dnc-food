import Header from "../../Component/Header/Header";
import Card from "../../Component/Card-Produto/Card";
import "./index.scss";

const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Header />
      <div className="Display-card">
        {data.map((food) => (
          <Card key={food.id} data={food} />
        ))}
      </div>
      <div className="Footer"></div>
    </div>
  );
};

export default Home;
