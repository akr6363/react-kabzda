import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOf from "./components/UncontrolledOnOf/UncontrolledOnOf";
import {OnOf} from "./components/OnOf/OnOf";
import {Select} from "./components/Select/Select";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionState, setAccordionState] = useState<boolean>(false)

    let [onOfState, setOnOfState] = useState<boolean>(false)
    const usersArr: ItemType[] = [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Anya', value: 3},
        {title: 'Vovan', value: 4},
    ]

    const [selectValue, setSelectValue] = useState<number | null>(null)
    const setSelectValueHandler = (value: number) => {
        setSelectValue(value)
    }


    return (
        <div>
            <PageTitle title={"This is APP Component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       accordionState={accordionState}
                       setAccordionState={setAccordionState}
                       items={usersArr}
                       onClick={(value) => alert(value)}
            />
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<hr/>*/}
            {/*<h1>UseState</h1>*/}
            <UncontrolledOnOf/>
            <OnOf onOfState={onOfState} setOnOfState={setOnOfState}/>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}
            <Select items={usersArr}
                    value={selectValue}
                    onChange={setSelectValueHandler}/>
            <h3>dfdff</h3>
            <UncontrolledAccordion titleValue={'sdsd'}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;


