/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { reservationTimeData } from "../../../const/const";
import { TimePicker } from "react-ios-time-picker";
import PropTypes from "prop-types";
const ReservationSystem = (props) => {
  const [defaultDateData, setDefaultDateData] = useState(reservationTimeData);
  const { finalSelectedData } = props;
  const selectedData = useMemo(() => {
    return defaultDateData.filter((item) => item.checked);
  }, [defaultDateData]);

  useEffect(() => {
    finalSelectedData(selectedData);
  }, [finalSelectedData, selectedData]);

  const onChange = (day, timeValue, type) => {
    setDefaultDateData((prevData) => {
      let updatedItems = [...prevData];
      if (type === "start") {
        updatedItems = updatedItems.map((data) =>
          data.MeetingsDay === day.MeetingsDay
            ? { ...data, MeetingsStart: timeValue }
            : data
        );
      } else if (type === "end") {
        updatedItems = updatedItems.map((data) =>
          data.MeetingsDay === day.MeetingsDay
            ? { ...data, MeetingsFinish: timeValue }
            : data
        );
      }
      return updatedItems;
    });
  };

  const CheckBox = (checked, day) => {
    setDefaultDateData(
      defaultDateData.map((data) =>
        data.MeetingsDay === day.MeetingsDay
          ? { ...data, checked: checked }
          : data
      )
    );
  };

  return (
    <>
      {defaultDateData &&
        defaultDateData.map((day, index) => {
          return (
            <div
              key={index}
              className="flex w-full items-center justify-center gap-x-8 py-3"
            >
              <input
                className="accent-tgold w-4 h-4 cursor-pointer"
                type="checkbox"
                onChange={(e) => CheckBox(e.target.checked, day)}
              />
              <div className="text-left w-20 font-semibold">
                {day.MeetingsDay}
              </div>
              <div className="flex items-center gap-x-2">
                <TimePicker
                  id="start"
                  className="w-10"
                  onChange={(timeValue) => onChange(day, timeValue, "start")}
                  value={day.MeetingsStart}
                />
                <div className="w-5 h-[1px] bg-white" />
                <TimePicker
                  id="end"
                  className="w-10"
                  onChange={(timeValue) => onChange(day, timeValue, "end")}
                  value={day.MeetingsFinish}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ReservationSystem;

ReservationSystem.propTypes = {
  props: PropTypes.any,
};
