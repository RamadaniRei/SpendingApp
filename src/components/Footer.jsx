import React from "react";
import { moneyFormat } from "../helpers.jsx";

const Footer = ({ basket, total, setBasket }) => {
  const resetCart = () => {
    setBasket([]);
  };
  return (
    <div className="footer">
      <div className="footer-header">Your Cart</div>
      <div className="foote-container">
        {basket.map((item) => (
          <div className="footer-basket-item" key={item.id}>
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
      <div className="button-container">
        <span>Total: ${moneyFormat(total)}</span>
        <button onClick={resetCart} className="btn btn-reset">
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Footer;
