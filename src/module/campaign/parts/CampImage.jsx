import PropTypes from "prop-types";

const CampImage = ({
  className = "h-[158px]",
  image = "https://source.unsplash.com/random",
}) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt="image-item"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};
CampImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};
export default CampImage;
