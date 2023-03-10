import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/OnOff/OnOff";

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
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={3}/>
            <Rating value={5}/>
            <OnOff isOn={true}/>
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
