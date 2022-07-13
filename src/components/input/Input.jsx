import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { ErrorBoundary, withErrorBoundary } from "react-error-boundary";
import classNames from "../../utils/classNames";
const Input = (props) => {
  const {
    control,
    name,
    inputType,
    error,
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative text-center">
      <input
        type={inputType || "text"}
        className={classNames(
          "w-full py-4 px-6 border rounded-xl text-sm font-medium text-text1 bg-white dark:border-darkStroke dark:bg-transparent dark:text-white placeholder:text-text4 dark:placeholder:text-text2 transition-all",
          error ? "border-error" : "border-strock",
          children ? "pr-16" : ""
        )}
        placeholder={!error ? placeholder : ""}
        {...rest}
        {...field}
      />
      {error && (
        <span className="absolute text-error font-medium text-sm left-6 top-1/2 -translate-y-1/2 align-middle pointer-events-none input-error">
          {error}
        </span>
      )}
      {children && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 select-none">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  inputType: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorBoundary,
});
