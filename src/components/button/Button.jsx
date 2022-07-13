import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "../../utils/classNames";
const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  kind,
  href = "#",
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaltBtnClassName =
    "text-base font-semibold rounded-xl flex items-center justify-center min-h-[56px] ";
  switch (kind) {
    case "primary":
      defaltBtnClassName = defaltBtnClassName + "bg-primary text-white";
      break;
    case "secondary":
      defaltBtnClassName = defaltBtnClassName + "bg-secondary text-white";
      break;
    case "ghost":
      defaltBtnClassName =
        defaltBtnClassName + "bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (href)
    return (
      <Link to={href} className={classNames(defaltBtnClassName, className)}>
        {child}
      </Link>
    );
  return (
    <button
      className={classNames(
        defaltBtnClassName,
        className,
        isLoading ? "opacity-70 pointer-events-none" : ""
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
