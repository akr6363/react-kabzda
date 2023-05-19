import React, {FC} from 'react';
import {ClockType} from "./Clock";

export const AnalogClockView: FC<ClockType> = ({date}) => {

    const getTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
    return (
        <div>
            {getTime(date)}
        </div>
    );
};

