import classNames from "classnames";
import { useState } from "react";
import ComboBox from "../../comboBox";
function SelectBookHour() {
  const hoursArray = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 8 },
    { value: 12 },
    { value: 24 },
  ];
  const minuetsArray = [
    { value: 0 },
    { value: 10 },
    { value: 15 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 45 },
    { value: 50 },
  ];

  const [showHours, setShowHours] = useState(false);

  function showHoursFunction() {
    setShowHours(!showHours);
  }
  return (
    <div className="min-h-[120px] flex flex-col gap-y-2">
      <p className="font-semibold text-base ">
        How long are your meetings for?
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
              <div className="font-normal text-base">1 Saat</div>
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
                <ComboBox array={hoursArray} title={"hours"} />
                <ComboBox array={minuetsArray} title={"minuets"} />               
              </div>
              <div className="w-full flex items-center gap-x-3 justify-end px-2 py-4">
                <button
                  onClick={(event) => {
                    event.preventDefault(); // Prevent default form submission behavior
                    showHoursFunction();
                  }}
                  className="hover:underline hover:text-[#f7b32cce] text-[color:var(--color-primary)]"
                >
                  Cancel
                </button>
                <button onClick={()=>{}} className="bg-[color:var(--color-primary)] rounded-full px-4 py-1">
                  OK
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
