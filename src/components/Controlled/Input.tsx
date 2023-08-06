import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
    let [value, setValue] = useState<string>("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
           <input value={value} onChange={onChange}/>
        </div>
    );
};
