import React, { useEffect, useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import ErrorFallback from "./components/ErrorBoundary";
import axios from "axios";

const Coin = React.lazy(() => import("./components/Coin"));

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    if (response.status === 200) {
      setCoins(response.data);
    } else {
      setErrorFlag(true);
    }
    console.log(response);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="brand">
          <i className="fa-regular fa-moon"> </i>
          CoinMoon
        </h1>
        <form>
          <input
            type="text"
            className="inputField"
            placeholder="Search a Coin"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="coinsContainer">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            getData();
          }}
          className="errorBoundary"
        >
          <Suspense fallback={<div>Loading...</div>}>
            {!errorFlag &&
              filteredCoins.map((coin) => (
                <Coin
                  id={coin.id}
                  key={coin.id}
                  imageSrc={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketCap={coin.market_cap}
                  volume={coin.total_volume}
                  priceChange={coin.price_change_percentage_24h}
                />
              ))}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
