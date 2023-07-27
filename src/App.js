import React, { useState } from "react";
import "./app.css";
import Navbar from "./common/Navbar";
import Chart from "./common/Graph";
import Hero from "./common/Hero";
import BuyAndSell from "./common/BuyAndSell";
import { dummyData } from "./utils/utils";

function App() {
  const [activeTab, setActiveTab] = useState("Day");
  const [isMoreInfo, setIsMoreInfo] = useState(false);

  const handleShowMireInfo = () => {
    setIsMoreInfo(true);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Navbar navbarHeading="Bitcoin Wallet" />
      <Hero
        title="Bitcoin"
        showMoreInfo={handleShowMireInfo}
        btcLabel="BTC"
        bitcoinAmount="3.59020"
        bitcoinValueInUSD="19.153"
        profitOrLossMade="-2.32"
        isMoreInfo={isMoreInfo}
        tooltip="More info"
      />

      <div>
        <Chart
          handleTabClick={handleTabClick}
          activeTab={activeTab}
          data={dummyData}
          lowerAmount="4.895"
          higherAmount="6.857"
          isMoreInfo={isMoreInfo}
          bitCoinValueConversion={"1 BTC = $5.483"}
        />{" "}
        {isMoreInfo && (
          <div className="buy-sell-container">
            <BuyAndSell text="Buy BTC" backgroundColor="#2376ff" />
            <BuyAndSell text="Sell BTC" backgroundColor="#fe4e8a" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
