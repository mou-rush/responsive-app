import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./buyAndSell.css";

const DollarComponent = ({ text, backgroundColor }) => {
  return (
    <div className="dollar-component">
      <div className="buy-and-sell-paper">
        <div
          className="dollar-icon"
          style={{ backgroundColor: backgroundColor }}
        >
          <FontAwesomeIcon icon={faDollarSign} />
        </div>
        <div className="dollar-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DollarComponent;
