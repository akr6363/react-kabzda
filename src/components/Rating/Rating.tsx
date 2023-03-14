import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setRatingValue: (value: RatingValueType) => void
}

export const Rating: React.FC<RatingPropsType> = ({value, setRatingValue}) => {

    return (
        <div>
            <Star selected={value > 0} setRatingValue={() => {setRatingValue(1)}}/>
            <Star selected={value > 1} setRatingValue={() => {setRatingValue(2)}}/>
            <Star selected={value > 2} setRatingValue={() => {setRatingValue(3)}}/>
            <Star selected={value > 3} setRatingValue={() => {setRatingValue(4)}}/>
            <Star selected={value > 4} setRatingValue={() => {setRatingValue(5)}}/>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
    setRatingValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRatingValue}>
            {props.selected ? <b>Star </b> : 'Star'}
        </span>

}