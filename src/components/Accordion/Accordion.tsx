import React from "react";

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    accordionState: boolean
    setAccordionState: (state: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    const setAccordionStateHandler = () => {
        props.setAccordionState(!props.accordionState)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionState={setAccordionStateHandler}/>
            {props.accordionState && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setAccordionState: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={props.setAccordionState}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) =>
                <li key={index} onClick={()=> {props.onClick(el.value)}}>{el.title}</li>)}
        </ul>
    )
}

export default Accordion