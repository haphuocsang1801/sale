import React from "react";

import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const CampMeta = ({
  amount = "173",
  text = "Total backers",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          "text-text2 text-sm font-semibold",
          size === "small" ? "text-sm" : "text-xl"
        )}
      >
        {amount}
      </h4>
      <span
        className={classNames(
          "text-text4 text-xs",
          size === "small" ? "text-sx" : "text-base"
        )}
      >
        {text}
      </span>
    </div>
  );
};
CampMeta.propTypes = {
  amount: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
};
export default CampMeta;
