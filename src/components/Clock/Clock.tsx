import React, {useEffect, useState} from "react";
import styled from "styled-components";
import styles from './Clock.module.css'
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";


type ClockPropsType = {
    mode: 'digital' | 'analog'
}

export type ClockType = {
    date: Date
}


export const Clock: React.FC<ClockPropsType> = ({mode}) => {
    const [time, setTime] = useState(new Date())


    useEffect(() => {
       let id = setInterval(()=> {
           console.log('tik')
            setTime(new Date())
        }, 1000)

        return () => {
           clearInterval(id)
        }
    }, [])

    return (
        <>
            {mode === 'digital'
                ? <DigitalClockView date={time}/>
                : <AnalogClockView date={time}/>}
        </>
    )
}


