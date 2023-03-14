import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(true)

    const collapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapse ={collapse} />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapse: () => void
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, collapse}) => {

    return <h3 onClick={collapse}>----{title}----</h3>
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
