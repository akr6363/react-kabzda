import type { Meta, StoryObj } from '@storybook/react';

import {OnOf } from './OnOf';
import {useState} from "react";

const meta: Meta<typeof OnOf> = {
    title: 'OnOf',
    component: OnOf,
};

export default meta;
type Story = StoryObj<typeof OnOf>;


// export const On: Story = {
//     render: () => <OnOf onOfState={true} setOnOfState={x=>x}/>,
// };
//
// export const Off: Story = {
//     render: () => <OnOf onOfState={false} setOnOfState={x=>x}/>,
// };

const OnOfWithHooks = () => {

    const [isPrimary, setIsPrimary] = useState(false);

    // Sets a click handler to change the label's value

    return <OnOf onOfState={isPrimary} setOnOfState={setIsPrimary} />;
};

export const Primary = {
    render: () => <OnOfWithHooks />,
};