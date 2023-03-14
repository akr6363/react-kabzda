import React, {useState} from "react";



export function UncontrolledRating() {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star id={1} selected={value > 0} setValue={setValue} value={1}/>
            <Star id={2} selected={value > 1} setValue={setValue} value={2}/>
            <Star id={3} selected={value > 2} setValue={setValue} value={3}/>
            <Star id={4} selected={value > 3} setValue={setValue} value={4}/>
            <Star id={5} selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )

}

type StarPropsType = {
    id: number
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {

    const onclickHandler = () => {
        props.setValue(props.value)
    }
        return <span onClick={onclickHandler}>
            {props.selected ? <b>Star </b> : 'Star'}
        </span>

}
