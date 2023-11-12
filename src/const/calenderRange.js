export const calendarRange = () => {
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
      .split(", ") // Virgül ve ardından gelen boşluğu kullanarak ayır
      .map((part) => part.trim());

    const randomTimes = Array.from({ length: 3 }, () => ["11.30 AM"]);

    calendarDays.push({ day, month, weekday, randomTimes });
  }

  return calendarDays;
};

// const getRandomTime = () => {
//   const hours = Math.floor(Math.random() * 24);
//   const minutes = Math.floor(Math.random() * 60);
//   return `${hours.toString().padStart(2, "0")}:${minutes
//     .toString()
//     .padStart(2, "0")}`;
// };
