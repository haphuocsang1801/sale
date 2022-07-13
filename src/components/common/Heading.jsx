import React from "react";
import PropTypes, { node } from "prop-types";

const Heading = ({ children, className = "", number = null }) => {
  return (
    <h2 className={`text-lg font-semibold text-text1 mb-5 ${className}`}>
      {children}
      {number && <span className="text-secondary p-1">{`(${number})`}</span>}
    </h2>
  );
};
Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  number: PropTypes.string,
};
export default Heading;
