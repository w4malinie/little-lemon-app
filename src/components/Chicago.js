import React from "react";
import img1 from "../assets/Mario-and-Adrian-A.jpg";
import img2 from "../assets/Mario-and-Adrian-b.jpg";
import styles from "./chicago.css";

function Chicago() {
  return (
    <div className="container">
      <div className="about-container">
        <div className="about-text">
          <div className="about-copy">
            <h4>About Us</h4>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              repellat, nihil voluptatum, dolor quo mollitia adipisci assumenda
              ex eos magni incidunt nulla. Blanditiis molestias ratione natus
              pariatur eligendi rem tenetur.
            </p>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ipsa dolorem tempore quo laudantium temporibus vero accusantium
              doloremque autem id maxime inventore aperiam, nobis quia delectus
              nam, ut quae expedita?
            </p>
          </div>
        </div>
        <div className="about-imgs">
          <img src={img1} alt="Little Lemon Chefs" className="chicago-img" />
          <img src={img2} alt="Little Lemon Chefs" className="chicago-img" />
        </div>
      </div>
    </div>
  );
}

export default Chicago;
