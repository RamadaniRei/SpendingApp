import React from "react";
import CardItem from "./CardItem";

const Card = ({ products, product, setBasket, basket, total, money }) => {
  return (
    <div className="card">
      {products.map((item) => (
        <CardItem
          key={item.id}
          basket={basket}
          setBasket={setBasket}
          product={item}
          total={total}
          money={money}
        />
      ))}
    </div>
  );
};

export default Card;
