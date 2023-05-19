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

//
// export const KeyTrackerExample = () => {
//     const [text, setText] = useState('')
//
//     useEffect(()=> {
//         const handler = (e: KeyboardEvent) => {
//             console.log(e.key)
//             setText((state) => state + e.key)
//         }
//         window.addEventListener('keypress', handler)
//         return () => {
//             window.removeEventListener('keypress', handler)
//         }
//     }, [])
//     return <>
//         typed text : {text}
//     </>
// }


export const KeyTrackerExample = () => {
    const [text, setText] = useState('')

    useEffect(()=> {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return <>
        typed text : {text}
    </>
}

export default meta;
