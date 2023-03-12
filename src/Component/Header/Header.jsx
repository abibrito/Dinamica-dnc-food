import "./index.scss";
import logo from "../../assets/img/logo-dnc.svg";
import iconCar from "../../assets/img/icon-carrinho.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo DNC" />
      <div className="header__nav">
        <ul>
          <li>
            <b>Food</b>
          </li>
          <li>Variedades</li>
          <li>Lanches</li>
          <li>Pizzas</li>
          <li>Doces</li>
          <li>Promoções</li>
        </ul>
      </div>
      <div className="header__carrinho">
        <a href="">
          <span>Minhas Compras</span>
          <img src={iconCar} alt="icon carrinho" />
        </a>
      </div>
    </div>
  );
};

export default Header;
