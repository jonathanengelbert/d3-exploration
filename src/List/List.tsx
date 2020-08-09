import React, {useState} from 'react';

import './listStyles.scss';
import {useDispatch, useSelector} from "react-redux";

interface IList {
    data?: any
}

export default function List(props: IList) {
    const data = useSelector((state: any) => state.data.data);
    const [currentInput, setCurrentInput] = useState<number | null>(null);
    const dispatch = useDispatch();



    let items = <p>No items available</p>

    if (data) {
        items = data.map((i: any) => {
            return (
                <li
                    key={i + 1}
                    onClick={() => alert(i)}
                >{i}
                </li>
            )
        })
    }

    const addData = () => {
        if(currentInput){
            dispatch({type:'data/addData', payload: currentInput});
        }
        return null;
    };

    const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setCurrentInput(parseInt(e.target.value));
    };

    return (
        <div className={'list-container'}>
            <h1>Items</h1>
            {items}
            <button onClick={() => addData()}>ADD DATA</button>
            <input type="number" onChange={(e) => handleTyping(e)}/>
        </div>
    )
}