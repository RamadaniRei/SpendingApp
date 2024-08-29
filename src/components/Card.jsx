import React from "react";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";

const Card = ({ products, setBasket }) => {
  const total = useSelector((state) => state.basket.total);
  const basket = useSelector((state) => state.basket.basket);
  const money = useSelector((state) => state.basket.money);
  return (
    <div className="card">
      {products.map((item) => (
        <CardItem
          key={item.id}
          basket={basket}
          product={item}
          total={total}
          money={money}
        />
      ))}
    </div>
  );
};

export default Card;
