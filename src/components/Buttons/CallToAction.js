import React from "react";
import style from "./call-to-action.css";

function CallToAction(props) {
  return <button className="primary">{props.cta}</button>;
}

export default CallToAction;
