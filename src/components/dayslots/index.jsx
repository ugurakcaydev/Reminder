/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { calendarRange } from "../../const/calenderRange";

export default function DaySlots({ selectedDay }) {
  const selectedDayName = selectedDay.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const daysAndHours = calendarRange(selectedDay);
  return (
    <>
      <div className="flex w-full items-center gap-x-3  ">
        <span className="flex-1 block h-[.5px]  bg-[color:var(--color-base-secondary)]" />
        <span className="text-sm">This Week</span>
        <span className="flex-1 block h-[.5px] bg-[color:var(--color-base-secondary)]"></span>
      </div>
      {daysAndHours.map((item, index) => (
        <div className="w-full font-semibold " key={index}>
          <div className="flex text-[color:var(--color-base-secondary)] items-center mb-2 text-left gap-x-1">
            {item.weekday == selectedDayName && (
              <span className="w-14 h-5 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-base)] px-0.5 text-[10px]">
                TODAY
              </span>
            )}
            <span className="font-bold">{item.weekday}</span>
            <span>{item.day}</span>

            <span>{item.month}</span>
          </div>

          <div className="flex w-full items-center  gap-x-2">
            {item.randomTimes.map((time, index) => (
              <button
                key={index}
                className="flex-1 h-[3rem] text-[color:var(--color-secondary)] font-semibold transition-all ease-out duration-200 bg-white border-2 border-[color:var(--color-primary)] rounded-3xl  hover:bg-[color:var(--color-primary)]  hover:text-white"
              >
                <span className="text-center font-bold">{time}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      <span className="w-full text-center py-4 border-b border-[color:var(--color-base)]">
        No availability after 9 November
      </span>
    </>
  );
}
