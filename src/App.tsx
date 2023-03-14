import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOf from "./components/UncontrolledOnOf/UncontrolledOnOf";
import OnOf from "./components/OnOf/OnOf";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    let [accordionState, setAccordionState] = useState<boolean>(false)

    let [onOfState, setOnOfState] = useState<boolean>(false)

    return (
        <div>
            <PageTitle title={"This is APP Component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            <Accordion titleValue={"Menu"}
                       accordionState={accordionState}
                       setAccordionState={setAccordionState}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<hr/>*/}
            {/*<h1>UseState</h1>*/}
            <UncontrolledOnOf/>
            <OnOf onOfState={onOfState} setOnOfState={setOnOfState}/>
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledRating/>*/}
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
