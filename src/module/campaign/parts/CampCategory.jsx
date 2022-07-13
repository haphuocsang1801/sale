import { Link } from "react-router-dom";
import IconFolder from "../../../components/icons/IconFolder";

import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const CampCategory = ({ text, className = "" }) => {
  return (
    <Link
      to={"/"}
      className={classNames(
        "flex items-baseline gap-x-3 font-medium text-text3 mb-4",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span className="text-xs ">{text}</span>
    </Link>
  );
};
CampCategory.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
export default CampCategory;
