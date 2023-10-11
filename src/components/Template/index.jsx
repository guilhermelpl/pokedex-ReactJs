import React from "react";
import "./styles.css";

const Template = (props) => {
  return (
    <>
      <div className="background"></div>

        <div className="content">{props.children}</div>
    </>
  );
};

export default Template;
