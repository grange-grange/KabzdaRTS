import React, {ChangeEvent, useState} from 'react';

export const Checkbox = () => {
    let [value, setValue] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type={"checkbox"} checked={value} onChange={onChange}/>
        </div>
    );
};

