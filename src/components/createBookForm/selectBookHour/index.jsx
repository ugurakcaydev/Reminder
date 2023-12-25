import classNames from "classnames";
import { useEffect, useState } from "react";
import ComboBox from "../comboBox";
import { bookDateHours, bookDateMinuets } from "../../../const/const";
function SelectBookHour() {
  const [showHours, setShowHours] = useState(false);
  const [selectBookingHour, setSelectBookingHour] = useState(bookDateHours[1]);
  const [selectBookingMinuets, setSelectBookingMinuets] = useState(
    bookDateMinuets[0]
  );

  const [isValid, setIsValid] = useState(true);
  function showHoursFunction() {
    setShowHours(!showHours);
  }

  useEffect(() => {}, [selectBookingHour, selectBookingMinuets]);
  const setHour = (value) => {
    if (selectBookingMinuets == 0 && value == 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setSelectBookingHour(value);
    }
  };
  const setMinuets = (value) => {
    if (selectBookingHour == 0 && value == 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setSelectBookingMinuets(value);
    }
  };


  return (
    <div className="min-h-[120px] flex flex-col gap-y-2">
      <p className="font-semibold text-base ">
      Toplantılarınız ne kadar sürüyor?
      </p>
      <div className="pb-4 flex ">
        <div
          onClick={(event) => {
            event.preventDefault(); // Prevent default form submission behavior
            showHoursFunction();
          }}
          className={classNames(
            "rounded-lg w-full group overflow-auto border border-[#32414a] bg-[#232E35]  hover:bg-[#2d3b45] ",
            {
              hidden: showHours == true,
            }
          )}
        >
          <div className="w-full overflow-auto ">
            <div className="cursor-pointer flex items-center justify-between py-1 px-4 transition-all duration-500 min-h-[40px]">
              <div className="font-normal text-base">
                {selectBookingHour == 0 ? "" : selectBookingHour + " saat "}
                {selectBookingMinuets == 0
                  ? ""
                  : selectBookingMinuets + " dakika "}
              </div>
              <div className="rounded-full p-.5 hover:bg-[#3a4750] invisible group-hover:visible">
                <button className="rounded-full bg-transparent h-8 w-8 text-center flex items-center justify-center ">
                  <svg viewBox="0 0 16 16" className="h-[1rem]">
                    <path
                      fill="currentColor"
                      d="M10.3.3a1 1 0 011.4 0l4 4c.4.4.4 1 0 1.4l-10 10a1 1 0 01-.7.3H1a1 1 0 01-1-1v-4c0-.3.1-.5.3-.7zM8 5.4l-6 6V14h2.6l6-6L8 5.4zm3-3L9.4 4 12 6.6 13.6 5 11 2.4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {showHours && (
          <>
            <div className="flex flex-col w-full">
              <div className="w-full flex justify-center items-center  gap-x-3">
                <ComboBox
                  array={bookDateHours}
                  title={"saat"}
                  selectedValue={selectBookingHour}
                  onChange={(value) => {
                    setHour(value);
                  }}
          
                />
                <ComboBox
                  array={bookDateMinuets}
                  title={"dakika"}
                  selectedValue={selectBookingMinuets}
                  onChange={(value) => {
                    setMinuets(value);
                  }}
                 
                />
              </div>

              {!isValid && (
                <div className="flex items-center justify-start p-1 gap-x-2">
                  <svg
                    className="h-[0.875rem] text-red-500"
                    viewBox="0 0 16 16"
                  >
                    <g fill="currentColor">
                      <circle fill="currentColor" cx="8" cy="8" r="8"></circle>
                      <path
                        d="M7 4v5a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0Zm0 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
                        fill="var(--invert-text-default)"
                      ></path>
                    </g>
                  </svg>
                  <p className="text-sm text-red-500 ">
                    Saat ve dakika aynı anda sifir olamaz
                  </p>
                </div>
              )}
              <div className="w-full flex items-center gap-x-3 justify-end px-2 py-3">
                <button
                  onClick={(event) => {
                    // Prevent default form submission behavior
                    showHoursFunction();
                    event.preventDefault();
                  }}
                  className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]"
                >
                  İptal
                </button>
                <button
                  onClick={(event) => {
                    
                    setIsValid(true);
                    showHoursFunction();
                   
                    event.preventDefault();
                  }}
                  className="bg-[color:var(--color-primary)] rounded-full px-4 py-1"
                >
                  Tamam
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SelectBookHour;
