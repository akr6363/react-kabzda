import React, {useEffect, useState} from 'react';
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
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState<number>(props.value)

    // useEffect(() => {
    //     props.onChange(hoveredElementValue)
    // }, [hoveredElementValue]);

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);


    const selectedValue = props.items.find(el => el.value === props.value)

    const items = props.items.map((el, index) => {
        const onClickHandler = () => {
            props.onChange(el.value)
            setActive(false)
        }

        const onMouseEnterHandler = () => {
            setHoveredElementValue(el.value)
        }

        return (
            <Option key={index}
                    onMouseEnter={onMouseEnterHandler}
                    onClick={onClickHandler}
                    className={hoveredElementValue === el.value ? 'selected' : ''}>
                {el.title}
            </Option>
        )
    })

    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown') {
            if (hoveredElementValue !== props.items.length) {
                props.onChange(hoveredElementValue + 1)
                // setHoveredElementValue(hoveredElementValue + 1)
            }
        }
        if (e.key === 'ArrowUp') {
            if (hoveredElementValue !== 1) {
                props.onChange(hoveredElementValue - 1)
                // setHoveredElementValue(hoveredElementValue - 1)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <SelectBody className={active ? 'active' : ''}
                    tabIndex={0}
                    onKeyUp={onKeyUpHandler}
                    onBlur={() => setActive(false)}>
            <SelectHead
                onClick={() => {
                    setActive(!active)
                }}
            >
                {selectedValue && selectedValue.title}
            </SelectHead>
            <OptionContainer className={'options'}>
                {items}
            </OptionContainer>
        </SelectBody>
    );
};


const SelectHead = styled.div`
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

  //
  //&:hover {
  //  background-color: rgba(134, 134, 134, 0.4);
  //}
`
const Parent = styled.div`
  /* стили для родительского элемента */

  &.active {
    /* стили для родительского элемента при добавлении класса "active" */

    > p {
      display: block;
      /* стили для вложенного элемента при добавлении класса "active" у родительского элемента */
    }
  }
`

const SelectBody = styled.div`
  width: 70px;
  margin-top: 20px;
  display: inline-block;

  &.active {
    display: block;

    > .options {
      display: block;

    }
  }
`

const OptionContainer = styled.div`
  background-color: #fff;
  position: absolute;
  border: 1px solid #000;
  border-top: none;
  width: 70px;
  display: none;
`

const Option = styled.div`
  //&:hover {
  //  background-color: rgba(134, 134, 134, 0.4);
  //}
  &.selected {
    background-color: #66bf3c;
  }
`