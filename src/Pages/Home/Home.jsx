import Header from "../../Component/Header/Header";
import Card from "../../Component/Card-Produto/Card";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="Display-card">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="Display-card">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="Footer">
      </div>
    </div>
  );
};

export default Home;