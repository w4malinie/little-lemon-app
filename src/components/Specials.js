import React from "react";
import CallToMenu from "./CallToMenu";

import styles from "./specials.css";
import Special from "./Special";

function Specials() {
  return (
    <div className="container">
      <div className="specials-container">
        <div className="specials-info">
          <h4>This week specials</h4>
          <CallToMenu />
        </div>
        <div className="specials-cards">
          <Special />
          <Special />
          <Special />
        </div>
      </div>
    </div>
  );
}

export default Specials;
