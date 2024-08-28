import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div className="header">
      {total > 0 && money - total !== 0 && (
        <span>
          To Spend
          <span className="money">${moneyFormat(money - total)}</span>
          You have a lot of money
        </span>
      )}
      {total === 0 && (
        <span>
          To spend
          <span className="money">${moneyFormat(money)} You have money</span>
        </span>
      )}

      {money - total === 0 && (
        <span>
          <span className="money">0$ No more money to spend</span>
        </span>
      )}
    </div>
  );
};

export default Header;
