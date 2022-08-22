import React from "react";
import "./Switch.css";
import cx from "classnames";

const Switch = ({ rounded = false, isToggle, onToggle }) => {
  const sliderCX = cx("slider", {
    rounded: rounded,
  });
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggle} onChange={onToggle} />
      <span className={sliderCX}></span>
    </label>
  );
};

export default Switch;
