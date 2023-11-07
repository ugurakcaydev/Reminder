import PropTypes from "prop-types";

export default function DaySlots() {
  const daysArray = [];
  const today = new Date();
  const todayName = today.toLocaleDateString("en-US", { weekday: "long" });
  for (let i = 0; i <= 4; i++) {
    const day = new Date();
    day.setDate(day.getDate() + i); // Tarihi güncelliyoruz

    // Saati 3 saat ileri alıyoruz
    const localTime = new Date(day);
    localTime.setHours(localTime.getHours() + 1);

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const [{ value: dayName }, , { value: monthName }, , { value: dayNumber }] =
      formatter.formatToParts(day);
    const numberDay = parseInt(dayNumber);

    // Saatleri oluşturuyoruz (3 saat ekleyerek)
    const hoursArray = [];
    for (let j = 0; j < 3; j++) {
      const formattedHour = (localTime.getHours() + j * 3) % 12 || 12;
      const period = localTime.getHours() >= 12 ? "PM" : "AM";
      const formattedMinutes =
        (localTime.getMinutes() < 10 ? "0" : "") + localTime.getMinutes();
      hoursArray.push(`${formattedHour}:${formattedMinutes} ${period}`);
    }

    daysArray.push(
      <div key={i} className="w-full py-4 flex flex-col items-start">
        <div className="flex text-[color:var(--color-base-secondary)] items-center mb-2 text-left gap-x-1">
          {dayName == todayName && (
            <span className="w-14 h-5 flex items-center justify-center rounded-full bg-[color:var(--color-primary)] text-[color:var(--color-base)] px-0.5 text-[10px]">
              TODAY
            </span>
          )}
          <span className="font-semibold">{dayName}</span>
          <span>
            {monthName} {numberDay}th
          </span>
        </div>
        <div className="flex w-full items-center gap-x-2">
          {hoursArray.map((hour, index) => (
            <button
              key={index}
              className="flex-1 h-[3rem] text-[#808080] font-semibold transition-all ease-out duration-200 bg-white border-2 border-[color:var(--color-primary)] rounded-3xl  hover:bg-[color:var(--color-primary)]  hover:text-white"
            >
              <span className="text-center font-bold">{hour}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return <>{daysArray}</>;
}

// <div className="w-full py-4 flex flex-col items-start">
//   <div className="flex items-center mb-2 text-left">
//     {day} {month} th
//   </div>
//   <div className="flex w-full items-center gap-x-2">
//     {hours.map((hour, index) => (
//       <button
//         key={index}
//         className="flex-1 h-[3rem] text-black transition-all ease-out duration-200 bg-white border-2 border-[#2A9D8F] rounded-3xl  hover:bg-[#2A9D8F]  hover:text-white"
//       >
//         <span className="text-center font-bold">{hour} PM</span>
//       </button>
//     ))}
//   </div>
// </div>
DaySlots.propTypes = {
  hours: PropTypes.array,
};
