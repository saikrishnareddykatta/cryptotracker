import React from "react";
import "./Coin.css";

const Coin = (props) => {
  const { id, imageSrc, name, symbol, price, marketCap, volume, priceChange } =
    props;
  return (
    <div className="cryptoCoin">
      <img src={imageSrc} className="coinLogo" alt={`${name}-${id} symbol`} />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol.toUpperCase()}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketCap">Market Cap: ${marketCap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className="priceContainerDown">
          <i className="fas fa-angle-down fa-1x"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div>
          <div className="priceContainerUp">
            <i className="fas fa-angle-up fa-1x"></i>
            <p className="priceChange">{priceChange.toFixed(2)}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coin;
