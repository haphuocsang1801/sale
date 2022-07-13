import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const CampTitle = ({
  children,
  className = "text-base mb-2 font-semibold",
}) => {
  return (
    <h3 className={(classNames("text-text1 font-semibold "), className)}>
      {children}
    </h3>
  );
};
CampTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default CampTitle;
