import ReservationSystem from "../selectDateAndTime";


function SelectBookDays() {
  return (
    <div className="max-h-[150px] flex flex-col gap-y-2 ">
      <div className="w-full flex items-center justify-between">
        <span className="font-semibold text-base">
          Ne zaman rezervasyon yapmak için uygunsunuz?
        </span>
        <div className="group">
          <button className="font-normal ">
            <span className="group-hover:underline group-hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
              Düzenle
            </span>
          </button>
        </div>
      </div>

      <div >
        <div className=" w-full rounded-tl-lg rounded-tr-lg group overflow-auto border border-[#32414a] border-b-0 bg-[#232E35] hover:bg-[#2d3b45] cursor-pointer ">
          <div className=" text-center font-bold text-sm py-2">Gün ve saat seçiniz</div>
          <div className=" w-full h-36 px-5 overflow-y-scroll">
            <div className=" w-full flex flex-col  items-center justify-between ">
              <div className="w-full ">
                <ReservationSystem />
              </div>
              {/* <div className="group-hover:hidden block">
                  <span>Pzt-Cum</span>
                </div> */}
              {/* <div className="group-hover:block hidden">
                  <button className="font-normal ">
                    <span className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
                      Düzenle
                    </span>
                  </button>
                </div> */}
            </div>

          </div>
        </div>
        <div className="rounded-bl-lg rounded-br-lg group overflow-auto border border-[#32414a] bg-[#232E35] hover:bg-[#2d3b45] ">
          {/* <div className="w-full overflow-auto ">
            <div className="cursor-pointer flex items-center justify-between py-1 px-4 transition-all duration-500 min-h-[40px]">
              <div className="py-2 flex items-center justify-between w-full">
                <div className="flex flex-grow">
                  <div className="font-normal text-base">Müsait değil</div>
                </div>
                <div className="group-hover:hidden block">
                  <span>Cts-Paz</span>
                </div>
                <div className="group-hover:block hidden">
                  <button className="font-normal ">
                    <span className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]">
                      Düzenle
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SelectBookDays;
