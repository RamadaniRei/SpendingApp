import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import products from "./products.json";

function App() {
  const money = useSelector((state) => state.basket.money);
  const total = useSelector((state) => state.basket.total);
  const basket = useSelector((state) => state.basket.basket);

  return (
    <>
      <Header total={total} money={money} />
      <div className="container">
        <Card products={products} />
        {basket.length > 0 && <Footer />}
      </div>
    </>
  );
}

export default App;
