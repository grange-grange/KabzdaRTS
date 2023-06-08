import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    isOn: boolean
    setIsOn: (isOn: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            <div className={`${s.rect} ${(props.isOn && s.on)}`} onClick={() => {props.setIsOn(true)}}>On</div>
            <div className={`${s.rect} ${(!props.isOn && s.off)}`} onClick={() => {props.setIsOn(false)}}>Off</div>
            <div className={`${s.circle} ${(props.isOn ? s.on : s.off)}`}></div>
        </div>
    );
};


export default OnOff;