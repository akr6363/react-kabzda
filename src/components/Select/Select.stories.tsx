import type {Meta} from '@storybook/react';

import React, {useState} from "react";
import {Select} from "./Select";
import {ItemType} from "../Accordion/Accordion";

const meta: Meta = {
    title: 'select',
};

export default meta;

export const SelectComponent = () => {

    const usersArr: ItemType[] = [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Anya', value: 3},
        {title: 'Vovan', value: 4},
    ]

    const [selectValue, setSelectValue] = useState<number | null>(null)
    const setSelectValueHandler = (value: number) => {
        setSelectValue(value)
    }

    return <Select items={usersArr}
                   value={selectValue}
                   onChange={setSelectValueHandler}/>;
};

