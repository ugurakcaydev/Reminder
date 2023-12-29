import classNames from "classnames";
import PropTypes from "prop-types";
function BookingButtons({ path, index }) {
  return (
    <button
      className={classNames(
        "w-[2rem] h-[2rem] rounded-full p-.5 hover:bg-[color:var(--bg-secondary)] flex items-center justify-center ",
        {
          "opacity-0 group-hover:opacity-100 duration-500 ease-in-out transition-all":
            index != 4,
        }
      )}
    >
      <svg className="h-[1rem]" viewBox="0 0 16 16">
        <path fill="currentColor" d={path}></path>
      </svg>
    </button>
  );
}

export default BookingButtons;

BookingButtons.propTypes = {
  path: PropTypes.string,
  index: PropTypes.number,
};
