import React from "react";
import Coin from "./Coin";
import { render, screen } from "@testing-library/react";

describe("Test App Component", () => {
  const props = {
    id: "0",
    imageSrc:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    name: "Bitcoin",
    symbol: "btc",
    price: "18374.03",
    marketCap: "351733780640",
    volume: "90463295403",
    priceChange: 11.17162,
  };
  it("should test priceContainerUp when priceChange is greater than 0", () => {
    const wrapper = render(<Coin {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should test priceContainerDown when priceChange is less than 0", () => {
    props.priceChange = -11.17162;
    const wrapper = render(<Coin {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
