import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    // let [collapsed, setCollapsed] = useState<boolean>(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapse = () => {
        dispatch({type: TOGGLE_COLLAPSED})
        // setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapse ={collapse} />
            {!state.collapsed && <AccordionBody/>}
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
