import PropTypes from "prop-types";
function LoginRegisterButtons({ title, other }) {
  return (
    <div className="relative">
      <button className="w-full flex items-center gap-x-10 p-2 bg-tgold/75 font-semibold rounded-full ">
        <span className="w-8 p-2 bg-[#383838] rounded-full">
          {other === "Microsoft" ? (
            <svg viewBox="0 0 24 24">
              <path fill="#FF3D00" d="M0 0h11v11H0z"></path>
              <path fill="#70BE00" d="M13 0h11v11H13z"></path>
              <path fill="#FFB700" d="M13 13h11v11H13z"></path>
              <path fill="#00A5F5" d="M0 13h11v11H0z"></path>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <path
                d="M5.32 14.5l-.84 3.12-3.05.07a11.95 11.95 0 01-.1-11.2h.01l2.72.49 1.19 2.7a7.13 7.13 0 00.07 4.82"
                fill="#FBBC04"
              ></path>
              <path
                d="M23.79 9.76a12.01 12.01 0 01-4.28 11.6l-3.42-.18-.49-3.02a7.15 7.15 0 003.08-3.65h-6.42V9.76H23.8"
                fill="#4285F4"
              ></path>
              <path
                d="M19.51 21.36a12 12 0 01-18.08-3.67l3.89-3.19a7.14 7.14 0 0010.28 3.66l3.91 3.2"
                fill="#34A853"
              ></path>
              <path
                d="M19.66 2.76l-3.89 3.19A7.14 7.14 0 005.25 9.69l-3.91-3.2a12 12 0 0118.32-3.73"
                fill="#EA4335"
              ></path>
            </svg>
          )}
        </span>
        {other} ile {title}
      </button>
    </div>
  );
}

export default LoginRegisterButtons;

LoginRegisterButtons.propTypes = {
  title: PropTypes.string,
  other: PropTypes.string,
};
