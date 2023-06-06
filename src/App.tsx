import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating, RatingType} from "./components/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolleddAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function hello() {
    debugger
    alert('Hellooow');
}

// hello();

function App() {
    console.log("App rendering");

    let [rating, setRating] = useState<RatingType>(0)

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <Rating rating={rating} setRating={setRating}/>
            <UncontrolledRating />
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering");
    return (
        <h1>{props.title}</h1>
    );
}

export default App;
