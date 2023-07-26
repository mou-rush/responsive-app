import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./hero.css";

const Hero = ({
  title,
  btcLabel,
  bitcoinAmount,
  bitcoinValueInUSD,
  profitOrLossMade,
  showMoreInfo,
  isMoreInfo,
  tooltip,
}) => {
  return (
    <div className="hero">
      <div className="hero-paper">
        <div className="icon-title">
          <div className="btc-icon-circle ">
            <FontAwesomeIcon icon={faBitcoinSign} className="bitcoin-icon" />
          </div>
          <span className="btc-icon-title ">{title}</span>
          <p className="btc-label">{btcLabel}</p>
        </div>

        <p className="bitcoin-amount">{bitcoinAmount}BTC</p>
        <div className="wallet-amount">
          <p className="bitcoin-value-in-usd">${bitcoinValueInUSD} USD</p>
          <p className="profit-or-loss">{profitOrLossMade}%</p>
        </div>

        <div className="more-info-icon">
          <div className="tooltip">
            <FontAwesomeIcon icon={faChevronDown} onClick={showMoreInfo} />

            {!isMoreInfo && <span class="tooltiptext">{tooltip}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
