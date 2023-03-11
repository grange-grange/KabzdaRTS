import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    isOn: boolean
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <div className={`${s.rect} ${(props.isOn && s.on)}`}>On</div>
            <div className={`${s.rect} ${(!props.isOn && s.off)}`}>Off</div>
            <div className={`${s.circle} ${(props.isOn && s.on)}`}></div>
        </div>
    );
};


export default OnOff;