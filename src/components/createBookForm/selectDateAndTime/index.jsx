/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { reservationTimeData } from "../../../const/const";
import { TimePicker } from "react-ios-time-picker";
import PropTypes from "prop-types";
const ReservationSystem = (props) => {
  const [defaultDateData, setDefaultDateData] = useState(reservationTimeData);

  const selectedData = useMemo(() => {
    return defaultDateData.filter((item) => item.checked);
  }, [defaultDateData]);

  useMemo(() => {
    props.finalSelectedData(selectedData);
  }, [props, selectedData]);

  const onChange = (day, timeValue, type) => {
    setDefaultDateData();

    let updatedItems = [];
    if (type === "start") {
      updatedItems = defaultDateData.map((data) =>
        data.name === day.name ? { ...data, startTime: timeValue } : data
      );
    } else if (type === "end") {
      updatedItems = defaultDateData.map((data) =>
        data.name === day.name ? { ...data, endTime: timeValue } : data
      );
    }
    setDefaultDateData(updatedItems);
  };

  const CheckBox = (checked, day) => {
    setDefaultDateData(
      defaultDateData.map((data) =>
        data.name === day.name ? { ...data, checked: checked } : data
      )
    );
  };

  console.log({ selectedData });

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
              <div className="text-left w-20 font-semibold">{day.name}</div>
              <div className="flex items-center gap-x-2">
                <TimePicker
                  id="start"
                  className="w-10"
                  onChange={(timeValue) => onChange(day, timeValue, "start")}
                  value={day.startTime}
                />
                <div className="w-5 h-[1px] bg-white" />
                <TimePicker
                  id="end"
                  className="w-10"
                  onChange={(timeValue) => onChange(day, timeValue, "end")}
                  value={day.endTime}
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
  props: PropTypes.func,
};
