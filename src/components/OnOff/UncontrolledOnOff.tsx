import React, {useState} from 'react';
import s from './OnOff.module.css'

type UncontrolledOnOffPropsType = {
    //isOn: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

    let [isOn, setIsOn] = useState(false)

    const clickOn = () => setIsOn(true)
    const clickOff = () => setIsOn(false)

    return (
        <div>
            <div className={`${s.rect} ${(isOn && s.on)}`} onClick={clickOn}>On</div>
            <div className={`${s.rect} ${(!isOn && s.off)}`} onClick={clickOff}>Off</div>
            <div className={`${s.circle} ${(isOn ? s.on : s.off)}`}></div>
        </div>
    );
};


export default UncontrolledOnOff;