import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    //isOn: boolean
}

const OnOff = (props: OnOffPropsType) => {

    let [isOn, setIsOn] = useState(false)


    return (
        <div>
            <div className={`${s.rect} ${(isOn && s.on)}`} onClick={() => {setIsOn(true)}}>On</div>
            <div className={`${s.rect} ${(!isOn && s.off)}`} onClick={() => {setIsOn(false)}}>Off</div>
            <div className={`${s.circle} ${(isOn ? s.on : s.off)}`}></div>
        </div>
    );
};


export default OnOff;