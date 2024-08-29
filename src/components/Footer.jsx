import React from "react";
import { moneyFormat } from "../helpers.jsx";
import { useDispatch, useSelector } from "react-redux";
import { resetBasket } from "../redux/products/basketSlice.js";

const Footer = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const total = useSelector((state) => state.basket.total);
  const handleResetBasket = () => {
    dispatch(resetBasket());
  };
  return (
    <div className="footer">
      <div className="footer-header">Your Cart</div>
      <div className="footer-container">
        {basket.map((item) => (
          <div className="footer-basket-item" key={item.id}>
            <span>{item.title}</span>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
      <div className="button-container">
        <span>Total: ${moneyFormat(total)}</span>
        <button onClick={handleResetBasket} className="btn btn-reset">
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Footer;
