import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncntrlldAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function hello() {
    debugger
    alert('Hellooow');
}

// hello();

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledAccordion titleValue={"Users"} />
            <UncontrolledRating value={4}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={5}/>*/}
            <UncontrolledRating value={4}/>
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
