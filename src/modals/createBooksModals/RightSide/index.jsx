import PropTypes from "prop-types";

function RightSideBookModal({ bookData }) {
  return (
    <div className="flex-1 px-2 pt-8 overflow-hidden z-[1] relative ">
      <div
        className="flex bg-[#1d2629] h-full rounded rounded-tl-3xl rounded-tr-3xl "
        style={{ overflow: "hidden" }}
      >
        <div className="w-1/2  relative pl-5 px-5 py-5 flex flex-col gap-y-5">
          <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#32414a] " />
          <div
            className="flex break-words font-semibold text-lg"
            style={{
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {bookData.title}
          </div>
          <div className="flex w-fit items-center justify-start gap-x-1 border px-2 py-0.5 rounded-full  border-gray-500">
            <svg className="w-4 h-4" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
              ></path>
            </svg>
            <div>
              {bookData.hour == 0 ? "" : bookData.hour + " saat "}
              {bookData.minuets == 0 ? "" : bookData.minuets + " dakika "}
            </div>
          </div>
          <div>
            <div className="w-full h-3 rounded-full mt-3 bg-[#32414a]" />
            <div className="w-full h-3 rounded-full mt-3 bg-[#32414a]" />
            <div className="w-[70%] h-3 rounded-full mt-3 bg-[#32414a]" />
          </div>
        </div>
        <div className="flex-1 bg-[#1d2629]  p-4 rounded-tr-3xl border-l-2 border-l-[#2d3b45] flex flex-col gap-y-3 overflow-auto">
          {bookData?.invitedPeople.map((p, i) => (
            <div
              className="mb-1 w-full py-1.5 rounded-full flex items-center justify-center bg-[#32414a] font-semibold"
              key={i}
            >
              {p.email}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default RightSideBookModal;

RightSideBookModal.propTypes = {
  bookData: PropTypes.object,
};
