import { useState } from "react";

import DateTimePickerComponent from "../dateTimePicker";
import CalenderFormComponent from "../CalenderForm";
import DaySlots from "../dayslots";

export default function Calender() {
  const [showDateTimePicker, setDateTimePicker] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(new Date());

  const setDateTimeHome = (day) => {
    setSelectedDay(day);
    setDateTimePicker(false);
    setShowForm(false);
  };

  const handleButtonClick = (item, time) => {
    setShowForm(true);
    setSelectedItem(item);
    setSelectedTime(time);
  };
  return (
    <div className="w-[990px] p-14 bg-transparent -mt-24 mx-auto z-10 relative">
      <div className="w-full h-full border border-dashed border-[#ccc]  bg-[color:var(--bg-base-secondary)] shadow-lg rounded-2xl overflow-hidden">
        <div className="w-full h-10  flex justify-center gap-x-2 items-center border-b-4  border-[color:var(--color-primary)]">
          {/* [#2a9d8f] */}
          <svg viewBox="0 0 24 24" className="h-[1rem] w-auto">
            <path
              fill="currentColor"
              d="M24 12c0 10.08-1.92 12-12 12C2.03 24 .04 22.12 0 12.33V12C0 2.03 1.88.04 11.67 0H12c10.08 0 12 1.92 12 12Zm-9 5.63a.94.94 0 0 0-.94.93v.94a.94.94 0 1 0 1.88 0v-.94a.94.94 0 0 0-.94-.93ZM12 3.55a.94.94 0 0 0-.94.94v14.63a.94.94 0 1 0 1.88 0V4.5a.94.94 0 0 0-.94-.94ZM6 5.25a.94.94 0 0 0-.94.94v12a.94.94 0 1 0 1.88 0v-12A.94.94 0 0 0 6 5.25Zm3 4.31a.94.94 0 0 0-.94.94v7.13a.94.94 0 1 0 1.88 0V10.5A.94.94 0 0 0 9 9.56Zm9-4.31a.94.94 0 0 0-.94.94v10.87a.94.94 0 1 0 1.88 0V6.2a.94.94 0 0 0-.94-.94ZM15 7.5a.94.94 0 0 0-.94.94v7.12a.94.94 0 1 0 1.88 0V8.44A.94.94 0 0 0 15 7.5Zm-6-.94a.94.94 0 1 0 0 1.88.94.94 0 0 0 0-1.88Z"
            ></path>
          </svg>
          <span className="text-[color:var(--color-base)]">
            Powered by YouCanBookMe
          </span>
        </div>
        <div className="w-full  flex">
          {/* leftside */}
          <div className="w-[420px]  border-r border-[color:var(--color-base)]  ">
            <div className="max-h-[577px] pt-4 px-8 flex flex-col gap-y-2 justify-start items-start">
              <div className="h-[8rem] w-[8rem]  rounded-full overflow-hidden border border-[color:var(--bg-secondary)]">
                <img
                  className=""
                  src="https://s3.us-west-2.amazonaws.com/ycbm.production.upload.files/ycbm/0cf46768-20ad-412c-984b-b16fba1ac137/images/ivana-cajina-dnl6zipht2s-unsplash_1.png"
                />
              </div>
              <span className="font-semibold text-[1.5rem] leading-8 text-[color:var(--color-base)]">
                Interactive Demo
              </span>
              {/* Düzenlenecek yerler var  */}
              {showForm ? (
                <>
                  <div className="w-[90%] flex flex-col items-start justify-center  h-auto border border-[#ccc]  rounded-lg">
                    <div className="px-2 py-3 w-full">
                      <button className="flex w-full rounded-lg flex-col items-start px-2 py-2 justify-center gap-y-1 hover:bg-[color:var(--bg-base)]">
                        <span className="text-sm text-[#656d72] font-normal">
                          {selectedItem?.weekday}
                          {selectedItem?.month} {selectedItem?.day}th, 2023
                        </span>
                        <span className="font-bold">
                          {selectedItem.randomTimes[selectedTime]} -{" "}
                          {(
                            parseFloat(selectedItem.randomTimes[selectedTime]) +
                            0.3
                          ).toFixed(2)}{" "}
                          AM
                        </span>
                        <div className="flex gap-x-2 items-center justify-start">
                          <svg
                            className="h-[.9rem] text-[#656d72]"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M8.6 0l.02.02a8 8 0 010 15.96L8.6 16l-.03-.02a8.12 8.12 0 01-1.14 0L7.4 16l-.02-.02a8 8 0 010-15.96L7.4 0l.03.02a8.12 8.12 0 011.14 0L8.6 0zm4.6 11h-1.67c-.26.83-.63 1.65-1.11 2.47l-.02.03a6.02 6.02 0 002.8-2.5zm-8.73 0H2.8a6.02 6.02 0 002.8 2.5c-.49-.83-.86-1.66-1.13-2.5zm4.83 0H6.7c.31.78.74 1.57 1.3 2.36.56-.8.99-1.58 1.3-2.36zM4.05 7H2.08a6.04 6.04 0 000 2h1.97a9.6 9.6 0 010-2zm9.87 0h-1.97a9.6 9.6 0 010 2h1.97a6.04 6.04 0 000-2zM9.83 7H6.17a7.52 7.52 0 000 2h3.66a7.52 7.52 0 000-2zM5.6 2.5l-.08.03A6.03 6.03 0 002.8 5h1.67c.27-.84.64-1.67 1.13-2.5zm4.8 0l.02.03c.48.82.85 1.64 1.1 2.47h1.68a6.02 6.02 0 00-2.8-2.5zM8 2.64l-.13.19c-.5.73-.88 1.45-1.17 2.17h2.6A11.6 11.6 0 008 2.64z"
                            ></path>
                          </svg>
                          <span className="text-xs text-[#656d72]">
                            Europe / Istanbul
                          </span>
                        </div>
                      </button>
                    </div>

                    <div className="py-3 px-4 gap-x-2 border-t flex items-center justify-start w-full border-[#ccc]">
                      <svg className="h-[1rem]" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                        ></path>
                      </svg>
                      <span className="font-bold">30 minutes</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[7.25rem] h-[2rem] rounded-full flex items-center justify-between px-2  border-[color:var(--color-base)] border">
                    <svg className="h-[1rem]" viewBox="0 0 16 16">
                      <path
                        fill="currentColor"
                        d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 2a6 6 0 100 12A6 6 0 008 2zm0 2c.5 0 1 .4 1 .9V7h1c.5 0 1 .4 1 .9V8c0 .6-.4 1-1 1H8a1 1 0 01-1-.9V5c0-.6.4-1 1-1z"
                      ></path>
                    </svg>
                    <span className="text-[color:var(--color-base)] font-semibold text-sm">
                      30 minutes
                    </span>
                  </div>
                  <span className="mt-[1rem] text-[color:var(--color-base-secondary)] text-[16px]">
                    Choose a date and time that works for you.
                  </span>
                </>
              )}
            </div>
          </div>
          {/* rightside */}
          <div className="flex-1 flex flex-col items-center pt-[6px] px-6  ">
            <div className="w-full h-[4.5rem]  flex justify-between items-center border-b border-[color:var(--color-base)]">
              <button
                onClick={() => {
                  setSelectedDay(new Date()), setShowForm(false);
                }}
                className="px-4 py-0.5 border text-[14px] font-semibold border-[color:var(--bg-secondary)] rounded-full text-[color:var(--color-base)] hover:bg-[color:var(--bg-secondary)]"
              >
                Today
              </button>
              <span className="text-[color:var(--color-base)] font-semibold">
                November 2023
              </span>
              <div className="w-[71.19px] text-right">
                <button
                  className="p-2 hover:bg-[color:var(--bg-secondary)] rounded-full"
                  onClick={() => setDateTimePicker(!showDateTimePicker)}
                >
                  <svg className="h-[1rem]" viewBox="0 0 16 16">
                    <path
                      d="M11 0a1 1 0 011 1h2a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h2a1 1 0 112 0h4a1 1 0 011-1zM4 3H2v11h12V3h-2a1 1 0 01-2 0H6a1 1 0 11-2 0zm1 8a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3-3a1 1 0 110 2 1 1 0 010-2zM8 8a1 1 0 110 2 1 1 0 010-2zM5 8a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full pt-[1rem] min-h-[370px] relative flex flex-col gap-y-4 items-center justify-start">
              {/* //// */}

              {!showDateTimePicker && !showForm && (
                <DaySlots
                  selectedDay={selectedDay}
                  handleButtonClick={handleButtonClick}
                />
              )}
              {showDateTimePicker && (
                <DateTimePickerComponent setDateTime={setDateTimeHome} />
              )}
              {showForm && <CalenderFormComponent />}
              {/* {showDateTimePicker ? (
                <DateTimePickerComponent setDateTime={setDateTimeHome} />
              ) : (
                <DaySlots selectedDay={selectedDay} />
              )} */}
            </div>
            <div className="flex w-full justify-center text-xs border-t border-[color:var(--color-base)] items-center gap-x-8 h-12">
              <div className="flex justify-center items-center gap-x-2">
                <svg className="h-4 " viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M8.6 0l.02.02a8 8 0 010 15.96L8.6 16l-.03-.02a8.12 8.12 0 01-1.14 0L7.4 16l-.02-.02a8 8 0 010-15.96L7.4 0l.03.02a8.12 8.12 0 011.14 0L8.6 0zm4.6 11h-1.67c-.26.83-.63 1.65-1.11 2.47l-.02.03a6.02 6.02 0 002.8-2.5zm-8.73 0H2.8a6.02 6.02 0 002.8 2.5c-.49-.83-.86-1.66-1.13-2.5zm4.83 0H6.7c.31.78.74 1.57 1.3 2.36.56-.8.99-1.58 1.3-2.36zM4.05 7H2.08a6.04 6.04 0 000 2h1.97a9.6 9.6 0 010-2zm9.87 0h-1.97a9.6 9.6 0 010 2h1.97a6.04 6.04 0 000-2zM9.83 7H6.17a7.52 7.52 0 000 2h3.66a7.52 7.52 0 000-2zM5.6 2.5l-.08.03A6.03 6.03 0 002.8 5h1.67c.27-.84.64-1.67 1.13-2.5zm4.8 0l.02.03c.48.82.85 1.64 1.1 2.47h1.68a6.02 6.02 0 00-2.8-2.5zM8 2.64l-.13.19c-.5.73-.88 1.45-1.17 2.17h2.6A11.6 11.6 0 008 2.64z"
                  ></path>
                </svg>
                <span>Time zone</span>
              </div>
              <div className="font-semibold">Europe/İstanbul (3:41 PM)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
