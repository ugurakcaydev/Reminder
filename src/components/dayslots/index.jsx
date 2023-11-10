import PropTypes from "prop-types";
import { bookingTimes, futureDays } from "../../const/const";
import { useState } from "react";

export default function DaySlots() {
  // const daysArray = [];
  // const today = new Date();
  // const todayName = today.toLocaleDateString("en-US", { weekday: "long" });
  // for (let i = 0; i <= 4; i++) {
  //   const day = new Date();
  //   day.setDate(day.getDate() + i); // Tarihi güncelliyoruz

  //   // Saati 3 saat ileri alıyoruz
  //   const localTime = new Date(day);
  //   localTime.setHours(localTime.getHours() + 1);

  //   const options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   };
  //   const formatter = new Intl.DateTimeFormat("en-US", options);
  //   const [{ value: dayName }, , { value: monthName }, , { value: dayNumber }] =
  //     formatter.formatToParts(day);
  //   const numberDay = parseInt(dayNumber);

  //   // Saatleri oluşturuyoruz (3 saat ekleyerek)
  //   const hoursArray = [];
  //   for (let j = 0; j < 3; j++) {
  //     const formattedHour = (localTime.getHours() + j * 3) % 12 || 12;
  //     const period = localTime.getHours() >= 12 ? "PM" : "AM";
  //     const formattedMinutes =
  //       (localTime.getMinutes() < 10 ? "0" : "") + localTime.getMinutes();
  //     hoursArray.push(`${formattedHour}:${formattedMinutes} ${period}`);
  //   }

  //   daysArray.push(
  //     <div key={i} className="w-full py-4 flex flex-col items-start">
  //       <div className="flex text-[color:var(--color-base-secondary)] items-center mb-2 text-left gap-x-1">
  //         {dayName == todayName && (
  //           <span className="w-14 h-5 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-base)] px-0.5 text-[10px]">
  //             TODAY
  //           </span>
  //         )}
  //         <span className="font-semibold">{dayName}</span>
  //         <span>
  //           {monthName} {numberDay}th
  //         </span>
  //       </div>
  //       <div className="flex w-full items-center gap-x-2">
  //         {hoursArray.map((hour, index) => (
  //           <button
  //             key={index}
  //             className="flex-1 h-[3rem] text-[color:var(--color-secondary)] font-semibold transition-all ease-out duration-200 bg-white border-2 border-[color:var(--color-primary)] rounded-3xl  hover:bg-[color:var(--color-primary)]  hover:text-white"
  //           >
  //             <span className="text-center font-bold">{hour}</span>
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  // return <>{daysArray}</>;

  const [today, setToday] = useState(true);
  return (
    <>
      {/* Right Box */}
      <div className="flex-1 flex flex-col items-center pt-[6px] px-6  ">
        <div className="w-full h-[4.5rem]  flex justify-between items-center border-b border-[color:var(--color-base)]">
          <button className="px-4 py-0.5 border text-[14px] font-semibold border-[color:var(--bg-secondary)] rounded-full text-[color:var(--color-base)] hover:bg-[color:var(--bg-secondary)]" onClick={() => setToday(true)}>
            Today
          </button>
          <span className="text-[color:var(--color-base)] font-semibold">
            November 2023
          </span>
          <div className="w-[71.19px] text-right">
            <button className="p-2 hover:bg-[color:var(--bg-secondary)] rounded-full"
              onClick={() => setToday(false)}>
              <svg className="h-[1rem]" viewBox="0 0 16 16">
                <path
                  d="M11 0a1 1 0 011 1h2a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3c0-1.1.9-2 2-2h2a1 1 0 112 0h4a1 1 0 011-1zM4 3H2v11h12V3h-2a1 1 0 01-2 0H6a1 1 0 11-2 0zm1 8a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3-3a1 1 0 110 2 1 1 0 010-2zM8 8a1 1 0 110 2 1 1 0 010-2zM5 8a1 1 0 110 2 1 1 0 010-2zm0-3a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full pt-[1rem] flex flex-col items-center justify-center">
          <div className="flex w-full items-center gap-x-3 ">
            <span className="flex-1 block h-[.5px]  bg-[color:var(--color-base-secondary)]" />
            <span className="text-sm">This Week</span>
            <span className="flex-1 block h-[.5px] bg-[color:var(--color-base-secondary)]"></span>
          </div>
          {today ? (bookingTimes && bookingTimes.map((day, index) => (
            <div className="w-full" key={index}>
              {day.name}
              <div className="flex justify-around">
                {day.times.map((time, index) => (
                  <div key={index}>{time}</div>
                ))}
              </div>
            </div>
          ))) : (
            <div className="grid grid-cols-6 gap-x-8 text-xl  ">
              {futureDays.map((days, index) => (
                <div key={index} className="text-center hover:bg-[color:var(--bg-secondary)] p-1 px-2 rounded-full cursor-pointer">
                  {days}
                </div>
              ))}
            </div>

          )}


        </div>
        <span className="w-full text-center py-6 border-b border-[color:var(--color-base)]">
          No availability after 9 November
        </span>
        <div className="flex w-full justify-center text-xs items-center gap-x-8 h-12">
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


    </>
  )
}

DaySlots.propTypes = {
  hours: PropTypes.array,
};
