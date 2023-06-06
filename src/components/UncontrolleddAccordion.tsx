import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [isCollapsed, setIsCollapsed] = useState(false)
    const onTitleClickCallback = () => setIsCollapsed(!isCollapsed)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onTitleClickCallback={onTitleClickCallback}/>
            {isCollapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onTitleClickCallback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onTitleClickCallback}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;