import React from "react";

type AccordionPropsType = {
    titleValue: string
    accordionState: boolean
    setAccordionState: () => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            setAccordionState={props.setAccordionState}/>
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