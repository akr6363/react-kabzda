import type {Meta} from '@storybook/react';

import React, {useEffect, useState} from "react";

const meta: Meta = {
    title: 'useEffect demo',
};



export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only firs render(ComponentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])
    return (
        <>
            Hello, {counter} {fake}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>counter+
            </button>
            <button onClick={() => {
                setFake(fake + 1)
            }}>fake+
            </button>

        </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    // useEffect(() => {
    //     setTimeout(()=> {
    //         console.log('setTimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])

    useEffect(() => {
        setInterval(()=> {
            console.log('tik' + counter)
            setCounter((state)=> state + 1)
        }, 1000)
    }, [])



    return (
        <>
            Hello, counter : {counter}, fake: {fake}
        </>
    )
}


//22:13:11

// export const Clock = () => {
//     const [time, setTime] = useState(new Date(Date.now()))
//     console.log(time)
//
//     const getTime = (date: Date) => {
//         const hours = date.getHours().toString().padStart(2, '0');
//         const minutes = date.getMinutes().toString().padStart(2, '0');
//         const seconds = date.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`
//     }
//     useEffect(() => {
//         setInterval(()=> {
//             setTime(new Date(Date.now()))
//         }, 1000)
//     }, [])
//
//     return (
//         <>
//             {getTime(time)}
//         </>
//     )
// }

export default meta;
