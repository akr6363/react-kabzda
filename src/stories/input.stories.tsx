import type { Meta, StoryObj } from '@storybook/react';
import exp from "constants";
import {useState} from "react";

const meta: Meta = {
    title: 'input',
    // component: OnOf,
    argTypes: { onChange: { action: 'clicked' } }
};

export default meta;

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}/>
}

// export const On: Story = {
//     render: () => <OnOf onOfState={true} setOnOfState={x=>x}/>,
// };
//
// export const Off: Story = {
//     render: () => <OnOf onOfState={false} setOnOfState={x=>x}/>,
// };

// const OnOfWithHooks = () => {
//
//     const [isPrimary, setIsPrimary] = useState(false);
//
//     // Sets a click handler to change the label's value
//
//     return <OnOf onOfState={isPrimary} setOnOfState={setIsPrimary} />;
// };
//
// export const Primary = {
//     render: () => <OnOfWithHooks />,
// };