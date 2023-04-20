import React from "react";
import CallToMenu from "./Buttons/CallToMenu";
import { Link } from "react-router-dom";
import styles from "./specials.css";
import Special from "./Special";
import specialData from "../data/specialsData";

function Specials() {
  const specialElements = specialData.map((special) => {
    return (
      <Special
        key={special.id}
        img={special.img}
        title={special.title}
        price={special.price}
        description={special.description}
      />
    );
  });

  return (
    <div className="container">
      <div className="specials-container">
        <div className="specials-info">
          <h4>This week specials</h4>
          <Link to="/menu">
            <CallToMenu />
          </Link>
        </div>
        <div className="specials-cards">{specialElements}</div>
      </div>
    </div>
  );
}

export default Specials;
