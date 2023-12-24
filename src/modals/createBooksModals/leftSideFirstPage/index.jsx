import SelectBookHour from "../../../components/createBookForm/selectBookHour";
import SelectBookDays from "../../../components/createBookForm/selectBookDays";
import PropTypes from "prop-types";
function LeftSideFirstPage({ onClick }) {
  return (
    <div className="relative">
      <div className="opacity-100">
        <form
          action="
              "
          className="min-h-[410px] flex flex-col gap-y-3  "
        >
          <div className="text-center flex justify-center items-center ">
            <h2 className="font-semibold text-xl">Müsaitlik durumunuzu ayarlayın</h2>
          </div>
          <div className="flex flex-col gap-y-4 text-left ">
            <SelectBookHour />
            <SelectBookDays />
          </div>
          {/* <div className="mt-10 flex text-center justify-center items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                onClick(1);
              }}
              className="rounded-full w-full bg-[color:var(--color-primary)] hover:bg-[#f7b32ce1] relative cursor-pointer font-semibold text-base"
            >
              <span className="px-5 h-10 overflow-hidden text-base flex text-center justify-center items-center">
                <span>Sonraki adım</span>
              </span>
            </button>
          </div> */}
          
        </form>
      </div>
    </div>
  );
}



export default LeftSideFirstPage;

LeftSideFirstPage.propTypes = {
    onClick: PropTypes.func,
   
  };
