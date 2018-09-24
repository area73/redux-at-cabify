import React from "react";
import asCounterContainer from "../containers/asCounterContainer";

const Footer = ({ counter }) => {
  return <div className="footer">The number of clicks is {counter}</div>;
};

export default asCounterContainer(Footer);
