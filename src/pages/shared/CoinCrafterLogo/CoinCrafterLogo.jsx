import React from "react";
import { Link } from "react-router";

const CoinCrafterLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <img
          className="w-15 h-15 object-contain"
          src="https://i.ibb.co/1DHKLpD/coin-crafter.png"
          alt="logo"
        />
        <p className="text-3xl -ml-2 font-bold ">CoinCrafter</p>
      </div>
    </Link>
  );
};

export default CoinCrafterLogo;
