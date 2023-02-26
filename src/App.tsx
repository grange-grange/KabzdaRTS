import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";

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
            <Rating value={3}/>
            <Accordion titleValue={"AccTitle1"} collapsed={true}/>
            <Accordion titleValue={"AccTitle2"} collapsed={true}/>
            <Rating value={4}/>
            <Rating value={0}/>
            <Rating value={1}/>
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
