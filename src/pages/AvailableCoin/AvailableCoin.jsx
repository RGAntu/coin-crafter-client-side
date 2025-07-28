import React from "react";

const AvailableCoin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white p-6 text-center">
      {/* Logo or App Name */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
        CoinCrafter
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl font-medium mb-6 text-primary">
        We’re launching something amazing very soon.
      </p>

      <p className="text-2xl font-bold text-secondary mb-1">
        Stay tuned. Our Available Coin is under construction.
      </p>
    </div>
  );
};

export default AvailableCoin;
