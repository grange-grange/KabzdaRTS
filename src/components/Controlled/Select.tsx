import React, {ChangeEvent, useState} from 'react';

export const Select = () => {
    let [value, setValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <select value={value} onChange={onChange}>
            <option>none</option>
            <option value={'1'}>123</option>
            <option value={'2'}>456</option>
            <option value={'3'}>789</option>
        </select>
    );
};
