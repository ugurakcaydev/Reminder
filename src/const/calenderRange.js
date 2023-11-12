import PropTypes from "prop-types";
export const calendarRange = ({ selectedDate }) => {
  // let selectedWeekDay = String(selectedDate).split(" ")[0];
  // let selectedMonth = String(selectedDate).split(" ")[1];
  let selectedDay = parseInt(String(selectedDate).split(" ")[2]);

  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const calendarDays = [];
  for (let i = 0; i < 5; i++) {
    const currentDay = new Date(currentDate);
    currentDay.setDate(currentDate.getDate() + i);
    const [weekday, month, day] = currentDay
      .toLocaleDateString("en-US", options)
      .split(" ") // Virgül ve ardından gelen boşluğu kullanarak ayır
      .map((part) => part.trim());

    const randomTimes = Array.from({ length: 3 }, () => ["11.30 AM"]);
    if (parseInt(day) >= selectedDay) {
      calendarDays.push({ day, month, weekday, randomTimes });
    }
    
  }

  // const filteredDaysAndHours = calendarDays.filter((item) => {
  //   // date özelliğini eklemeniz gerekiyor
  //   return parseInt(item.day) >= selectedDay;
  // });

  // console.log(filteredDaysAndHours);
  console.log(calendarDays, "bb");
  return calendarDays;
};

calendarRange.propTypes = {
  selectedDate: PropTypes.any,
};
// const getRandomTime = () => {
//   const hours = Math.floor(Math.random() * 24);
//   const minutes = Math.floor(Math.random() * 60);
//   return `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}`;
// };
