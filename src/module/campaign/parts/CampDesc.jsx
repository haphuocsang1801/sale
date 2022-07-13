import PropTypes from "prop-types";
import React from "react";
import classNames from "../../../utils/classNames";

const CampDesc = ({ children, className = "text-sm mb-4" }) => {
  return (
    <p className={classNames("font-normal text-text3", className)}>
      {children}
    </p>
  );
};
CampDesc.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};
export default CampDesc;
