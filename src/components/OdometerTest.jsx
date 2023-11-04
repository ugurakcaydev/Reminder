import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

export const OdometerTest = () => {
    const [value, setValue] = useState(1234);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(4356), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <Odometer value={value} format="(.ddd),dd" />;
}