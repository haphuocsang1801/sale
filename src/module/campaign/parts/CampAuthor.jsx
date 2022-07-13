import React from "react";
import PropTypes from "prop-types";

const CampAuthor = ({
  avatar = "https://source.unsplash.com/random",
  name,
}) => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="w-8 h-8">
        <img
          src={avatar}
          alt="avatar-author"
          className="w-full h-full object-cover rounded-full "
        />
      </div>
      <span className="text-xs text-text3">
        by <span className="text-text2 font-semibold">{name}</span>
      </span>
    </div>
  );
};
CampAuthor.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default CampAuthor;
