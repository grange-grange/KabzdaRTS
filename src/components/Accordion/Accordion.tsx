import React from "react";

type AccordionPropsType = {
    titleValue: string
    isCollapsed: boolean;
    setAccordionCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue} setIsCollapsedCallback={props.setAccordionCollapsed}/>
            {!props.isCollapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    setIsCollapsedCallback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={props.setIsCollapsedCallback}>{props.title}</h3>
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

export default Accordion;