import React from "react";
import CallToMenu from "./Buttons/CallToMenu";
import { motion as m } from "framer-motion";
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
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
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
    </m.div>
  );
}

export default Specials;
