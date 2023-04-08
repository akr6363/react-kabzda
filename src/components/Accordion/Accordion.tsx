import React from "react";

type AccordionPropsType = {
    titleValue: string
    accordionState: boolean
    setAccordionState: (state: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    const setAccordionStateHandler = () => {
        props.setAccordionState(!props.accordionState)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionState={setAccordionStateHandler}/>
            {props.accordionState && <AccordionBody/>}
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion