import ReservationSystem from "../selectDateAndTime";

function SelectBookDays({ bookData, setBookData }) {
  return (
    <div className=" flex flex-col gap-y-2 ">
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold text-base">Rezervasyon günü</span>
        <div className="group">
          <button className="font-normal ">
            <span className="group-hover:underline group-hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
              Düzenle
            </span>
          </button>
        </div>
      </div>

      <div>
        <div className=" w-full rounded-tl-lg rounded-tr-lg group overflow-auto border border-[#32414a] border-b-0 bg-[#232E35] hover:bg-[#2d3b45] cursor-pointer ">
          <div className=" w-full h-36 px-5 overflow-y-scroll">
            <div className=" w-full flex flex-col  items-center justify-between ">
              <div className="w-full ">
                <ReservationSystem bookData={bookData} setBookData={setBookData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectBookDays;
