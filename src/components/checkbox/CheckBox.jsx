import PropTypes from "prop-types";
const CheckBox = ({ checked = true, onClick = () => {}, name, children }) => {
  return (
    <div className="flex items-start gap-x-5 ">
      <div
        className={`inline-flex items-center justify-center transition-all w-5 h-5 rounded border  cursor-pointer text-white dark:border-text3 ${
          checked
            ? "border-primary bg-primary dark:border-primary"
            : " border-strock"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          onChange={() => {}}
        />
        {checked && (
          <span>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5L4.33333 8L11 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      {children && (
        <div onClick={onClick} className="flex-1 cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
};
CheckBox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CheckBox;
