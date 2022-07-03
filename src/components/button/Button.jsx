import PropTypes from "prop-types";
const Button = ({
  type = "button",
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const child = isLoading ? (
    <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  return (
    <button
      className={`text-base font-semibold rounded-xl flex items-center justify-center text-white min-h-[56px] ${className} ${
        isLoading ? "opacity-70 pointer-events-none" : ""
      }`}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
