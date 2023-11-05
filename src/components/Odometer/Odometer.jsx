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

  return <Odometer value={odometerValue} format="(.ddd),dd" />;
};

OdometerNumbers.propTypes = {
  value: PropTypes.number,
  duration: PropTypes.number,
};
