import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import { Bg, Logo } from "../constants/importImages";
const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
      <img
        srcSet={`${Bg} 2x`}
        alt="background"
        className="hidden lg:block pointer-events-none absolute bottom-0 right-0 left-0 z-[-1]"
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-16">
        <img srcSet={`${Logo} 2x`} alt="logo" className="inline-block" />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl mx-auto px-5 py-7 lg:px-16 lg:py-12 ">
        <h1 className="font-semibold text-lg lg:text-xl mb-1 lg:mb-3 text-text1 text-center dark:text-white ">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
