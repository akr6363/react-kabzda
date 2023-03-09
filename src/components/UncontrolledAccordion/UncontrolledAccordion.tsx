import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

const AccordionTitle: React.FC<AccordionTitlePropsType> = ({title, setCollapsed, collapsed}) => {
    const collapse = () => {
        setCollapsed(!collapsed)
    }
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
