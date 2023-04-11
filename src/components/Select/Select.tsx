import React, {useState} from 'react';
import styled from "styled-components";

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

    const items = props.items.map((el, index) => {
        const onClickHandler = () => {
            props.onChange(el.title)
            setIsCollapsed(true)
        }
        return (
            <Option key={index} onClick={onClickHandler}>{el.title}</Option>
        )
    })
    return (
        <SelectBody>
            <SelectHead
                onClick={() => {
                    setIsCollapsed(!isCollapsed)
                }}
                // tabIndex={1}
                // onBlur={() => {
                //     setIsCollapsed(!isCollapsed)
                // }}
                >
                {props.value}
            </SelectHead>
            <OptionContainer>
            {!isCollapsed && items}
            </OptionContainer>
        </SelectBody>
    );
};


const SelectHead = styled.div `
  border-bottom: 1px solid black;
  padding: 7px 20px 10px 2px;
  position: relative;

  &:after {
    content: "▼";
    position: absolute;
    right: 5px;
    top: 15px;
    font-size: 10px;
  }

  &:hover {
    background-color: rgba(134, 134, 134, 0.4);
  }
`

const SelectBody = styled.div `
  margin-top: 20px;
  display: inline-block;
`
const OptionContainer = styled.div `
    border: 1px solid #000;
  border-top: none;
`

const Option = styled.div `
  &:hover {
    background-color: rgba(134, 134, 134, 0.4);
  }
`