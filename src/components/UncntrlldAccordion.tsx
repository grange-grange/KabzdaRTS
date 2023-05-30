import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [isCollpsd, setIsCollpsd] = useState(false)

    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={() => {setIsCollpsd(!isCollpsd)}}>TOGGLE</button>
            {isCollpsd && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;