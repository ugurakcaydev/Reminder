import SelectBookDays from "../../components/createBookForm/selectBookDays";
import SelectBookHour from "../../components/createBookForm/selectBookHour";

// eslint-disable-next-line react/prop-types
function CreateBooksModals({ close }) {
  return (
    <div className="w-full  relative   border-1 border-[#32414a] shadow-md rounded-xl text-[#F4F5F7] block ">
      <div className="absolute top-1 right-1 z-[2]">
        <button
          className="w-7 h-7 border-none flex items-center justify-center"
          onClick={close}
        >
          <svg viewBox="0 0 16 16" className="h-[1rem]">
            <path
              fill="currentColor"
              d="M2.3 2.3a1 1 0 011.4 0L8 6.6l4.3-4.3a1 1 0 011.3 0h.1c.4.4.4 1 0 1.4L9.4 8l4.3 4.3c.4.4.4 1 0 1.3v.1a1 1 0 01-1.4 0L8 9.4l-4.3 4.3a1 1 0 01-1.3 0h-.1a1 1 0 010-1.4L6.6 8 2.3 3.7a1 1 0 010-1.3z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex ">
        <div className="p-10 w-full overflow-hidden">
          <div className="mb-4 flex justify-center">
            <span className="flex items-center gap-x-1">
              <span className="w-4 h-4 rounded-full bg-[color:var(--color-primary)] p-1 border border-[color:var(--color-primary)]"></span>
              <span className="w-3 h-3 rounded-full bg-[color:var(--color-base)] p-1 border "></span>
            </span>
          </div>
          <div className="relative">
            <div className="opacity-100">
              <form
                action="
                    "
                className="min-h-[410px] flex flex-col gap-y-2"
              >
                <div className="text-center flex justify-center items-center ">
                  <h2 className="font-semibold text-xl">
                  Müsaitlik durumunuzu ayarlayın
                  </h2>
                </div>
                <div className="flex flex-col gap-y-4 text-left ">
                  <SelectBookHour />
                  <SelectBookDays />
                </div>
                <div className="mt-6 flex text-center justify-center items-center">
                  <button className="rounded-full w-full bg-[color:var(--color-primary)] hover:bg-[#f7b32ce1] relative cursor-pointer font-semibold text-base">
                    <span className="px-5 h-10 overflow-hidden text-base flex text-center justify-center items-center">
                      <span>Sonraki adım</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="p-1 overflow-hidden z-[1] relative w-full "></div>
      </div>
    </div>
  );
}

export default CreateBooksModals;
