/* eslint-disable no-unused-vars */
import { DateTimePicker } from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import { useState } from "react";
import DateTimePickerComponent from "../dateTimePicker";
import { daysAndHours } from "../../const/const";

export default function DaySlots() {
  // const daysArray = [];
  // const today = new Date();
  //
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

  //     daysArray.push(
  //       <div key={i} className="w-full py-4 flex flex-col items-start">
  //         <div className="flex text-[color:var(--color-base-secondary)] items-center mb-2 text-left gap-x-1">
  //           {dayName == todayName && (
  //             <span className="w-14 h-5 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-base)] px-0.5 text-[10px]">
  //               TODAY
  //             </span>
  //           )}
  //           <span className="font-semibold">{dayName}</span>
  //           <span>
  //             {monthName} {numberDay}th
  //           </span>
  //         </div>
  //         <div className="flex w-full items-center gap-x-2">
  //           {hoursArray.map((hour, index) => (
  //             <button
  //               key={index}
  //               className="flex-1 h-[3rem] text-[color:var(--color-secondary)] font-semibold transition-all ease-out duration-200 bg-white border-2 border-[color:var(--color-primary)] rounded-3xl  hover:bg-[color:var(--color-primary)]  hover:text-white"
  //             >
  //               <span className="text-center font-bold">{hour}</span>
  //             </button>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   }

  // return <>{daysArray}</>;
  const today = new Date();

  const todayName = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <div className="flex w-full items-center gap-x-3 ">
        <span className="flex-1 block h-[.5px]  bg-[color:var(--color-base-secondary)]" />
        <span className="text-sm">This Week</span>
        <span className="flex-1 block h-[.5px] bg-[color:var(--color-base-secondary)]"></span>
      </div>
      {daysAndHours.map((day, index) => (
        <div className="w-full font-semibold mb-4" key={index}>
          <div className="flex text-[color:var(--color-base-secondary)] items-center mb-2 text-left gap-x-1">
            {day.name == todayName && (
              <span className="w-14 h-5 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-base)] px-0.5 text-[10px]">
                TODAY
              </span>
            )}
            <span>{day.name}</span>
          </div>

          <div className="flex w-full items-center  gap-x-2">
            {day.times.map((time, index) => (
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
      <span className="w-full text-center py-6 border-b border-[color:var(--color-base)]">
        No availability after 9 November
      </span>
    </>
  );
}
