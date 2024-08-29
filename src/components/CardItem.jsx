import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/products/basketSlice";
import { moneyFormat } from "../helpers";

const CardItem = ({ product }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) =>
    state.basket.basket.find((item) => item.id === product.id)
  );
  const total = useSelector((state) => state.basket.total);
  const money = useSelector((state) => state.basket.money);

  const handleAddItem = () => {
    dispatch(addItem(product));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(product));
  };

  return (
    <div className="card-item">
      <img src={product.image} alt={product.title} />
      <div className="card-text">
        <h3>{product.title}</h3>
        <h3>${moneyFormat(product.price)}</h3>
      </div>
      <div className="actions">
        <button
          onClick={handleRemoveItem}
          className="btn btn-sell"
          disabled={!basket}
        >
          Remove
        </button>
        <span>{basket ? basket.amount : 0}</span>
        <button
          onClick={handleAddItem}
          className="btn btn-buy"
          disabled={total + product.price > money}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CardItem;
