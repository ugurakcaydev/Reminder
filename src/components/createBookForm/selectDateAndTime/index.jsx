import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ReservationSystem = ({ bookData, setBookData }) => {
  const [selectedDays, setSelectedDays] = useState("");
  const [selectedStartTimes, setSelectedStartTimes] = useState("");
  const [selectedEndTimes, setSelectedEndTimes] = useState("");

  let [selectedDaysData, setSelectedDaysData] = useState([]);

  const daysOfWeek = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const today = new Date().getDay();
  const days = [...daysOfWeek.slice(today), ...daysOfWeek.slice(0, today)];
  const morningTimes = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];
  const afternoonTimes = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const handleDayChange = (day, isChecked) => {
    if (isChecked) {
      setSelectedDays(day);
      setSelectedStartTimes("8:00");
      setSelectedEndTimes("12:00");
    } else {
      setSelectedDays("");
      setSelectedStartTimes("");
      setSelectedEndTimes("");
    }
  };

  const handleEdit = () => {
    if (selectedDays !== "") {
      selectedDaysData = {
        selectedDay: selectedDays,
        selectedStartTimes,
        selectedEndTimes,
      };

      setSelectedDaysData((prevState) => [...prevState, selectedDaysData]);

      // Only add the selected values if a day is selected
      setBookData((prevData) => ({
        ...prevData,
        meetingDetailDtos: [
          ...prevData.meetingDetailDtos,
          {
            MeetingsDay: selectedDays,
            MeetingsStart: selectedStartTimes,
            MeetingsFinish: selectedEndTimes,
          },
        ],
      }));
    } else {
      setSelectedDaysData([]);
      // Clear the meetingDetailDtos array when no day is selected
      setBookData((prevData) => ({
        ...prevData,
        meetingDetailDtos: [],
      }));
    }
  };

  useEffect(() => {
    console.log(bookData, "bookData");
  }, [bookData]);

//   const groupedDays = selectedDaysData.reduce((groups, dayData) => {
//       const { selectedDay, selectedStartTimes, selectedEndTimes } = dayData;
//       const key = `${selectedStartTimes} - ${selectedEndTimes}`;
//       if (!groups[key]) {
//           groups[key] = [];
//       }
//       groups[key].push(selectedDay);
//       return groups;
//   }, {});

  return (
    <div className="w-full">
      {days.map((day, index) => (
        <div
          key={index}
          className="w-full h-12 grid grid-cols-5 gap-y-2 items-center"
          style={{ gridTemplateColumns: "0.5fr 1.5fr 1fr  0.1fr  1fr" }}
        >
          <input
            className="accent-tgold w-4 h-4 cursor-pointer"
            type="checkbox"
            id={`day${index}`}
            name="day"
            value={day}
            onChange={(e) => handleDayChange(day, e.target.checked)}
            disabled={false}
          />
          <label htmlFor={`day${index}`}>{day}</label>
          <select
            className="p-1 bg-transparent border rounded-md outline-none cursor-pointer"
            onChange={(e) => setSelectedStartTimes(e.target.value)}
            disabled={false}
          >
            {morningTimes.map((time, index) => (
              <option
                className="text-center bg-[#32414a]"
                key={index}
                value={time}
              >
                {time} ÖÖ
              </option>
            ))}
          </select>
          <span className="p-1">—</span>
          <select
            className="p-1 bg-transparent border rounded-md outline-none cursor-pointer"
            onChange={(e) => setSelectedEndTimes(e.target.value)}
            disabled={false}
          >
            {afternoonTimes.map((time, index) => (
              <option
                className="text-center bg-[#32414a]"
                key={index}
                value={time}
              >
                {time} ÖS
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="button" onClick={handleEdit}>
        Onayla
      </button>
    </div>
  );
};

export default ReservationSystem;
