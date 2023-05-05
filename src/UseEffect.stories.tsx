import type {Meta} from '@storybook/react';

import React, {useEffect, useState} from "react";

const meta: Meta = {
    title: 'useEffect demo',
};

//22:13:11

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

    // useEffect(() => {
    //     console.log('useEffect only firs render(ComponentDidMount)')
    //     document.title = counter.toString()
    // }, [])
    // useEffect(() => {
    //     console.log('useEffect first render and every counter change')
    //     document.title = counter.toString()
    // }, [counter])


    return (
        <>
            Hello, counter : {counter}, fake: {fake}
            {/*<button onClick={() => {*/}
            {/*    setCounter(counter + 1)*/}
            {/*}}>counter+*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    setFake(fake + 1)*/}
            {/*}}>fake+*/}
            {/*</button>*/}

        </>
    )
}

export default meta;
