import type {Meta} from '@storybook/react';

import React, {useState} from "react";

const meta: Meta = {
    title: 'useState demo',
};

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(() => {
        return 0
    })


    return (
        <>
            <button onClick={() => {
                setCounter((state) => state + 1)
            }}>+
            </button>
            {counter}
        </>
    )
}

export default meta;
