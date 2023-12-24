import { useEffect, useState } from "react";
import Odometer from "react-odometerjs";
import PropTypes from "prop-types";

export const OdometerNumbers = ({ value, duration }) => {
  const [odometerValue, setOdometerValue] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => setOdometerValue(value), duration);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, duration]);

  return (
    <div className=" flex flex-col items-center  ">
      <span className="text-[48px] text-[color:var(--color-base-secondary)]">
        <Odometer value={odometerValue} format="(.ddd),dd" />
      </span>
      <span className="text-[1rem] text-[color:var(--color-secondary)]">
        Rezervasyon
      </span>
    </div>
  );
};

OdometerNumbers.propTypes = {
  value: PropTypes.number,
  duration: PropTypes.number,
};
