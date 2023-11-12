import PropTypes from "prop-types";
export const calendarRange = (selectedDate) => {
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

    const randomTimes = Array.from({ length: 3 }, () => ["9.10 AM"]);
    if (parseInt(day) >= selectedDay) {
      calendarDays.push({ day, month, weekday, randomTimes });
    }
  }
  return calendarDays;
};

calendarRange.propTypes = {
  selectedDate: PropTypes.any,
};
