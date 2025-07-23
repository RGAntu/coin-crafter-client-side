import React from "react";
import { useNavigate } from "react-router";

const coinPackages = [
  { coins: 10, price: 1 },
  { coins: 150, price: 10 },
  { coins: 500, price: 20 },
  { coins: 1000, price: 35 },
];

const PurchaseCoin = () => {
  const navigate = useNavigate();

  const handleBuyNow = (coins, price) => {
    navigate(`/dashboard/checkout/${coins}/${price}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Purchase Coins</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {coinPackages.map((pkg, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 text-center shadow hover:shadow-lg cursor-pointer bg-white"
            onClick={() => handleBuyNow(pkg.coins, pkg.price)}
          >
            <h3 className="text-xl font-bold mb-2">{pkg.coins} Coins</h3>
            <p className="text-lg">=</p>
            <p className="text-xl font-semibold mt-2">${pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCoin;
