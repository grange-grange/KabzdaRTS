import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolleddAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {Input} from "./components/Controlled/Input";
import {Checkbox} from "./components/Controlled/Checkbox";
import {Select} from "./components/Controlled/Select";

// function hello() {
//     debugger
//     alert('Hellooow');
// }

// hello();

function App() {
    console.log("App rendering");

    let [rating, setRating] = useState<RatingType>(0)
    let [accordionIsCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [isOn, setIsOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={"Menu"} isCollapsed={accordionIsCollapsed} setAccordionCollapsed={()=>setAccordionCollapsed(!accordionIsCollapsed)}/>
            <UncontrolledAccordion titleValue={"Menu"} />
            <Rating rating={rating} setRating={setRating}/>
            <UncontrolledRating />
            <UncontrolledOnOff/>
            <OnOff isOn={isOn} setIsOn={setIsOn}/>
            <Input/>
            <Checkbox />
            <Select />
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
