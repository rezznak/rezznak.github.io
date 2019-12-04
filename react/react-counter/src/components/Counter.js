import React from 'react';
import './Counter.css';
import CounterClass from './CounterClass';

const Counter = (props) => {
    let text = (props.myText == undefined) ? 'Domyślny tekst' : props.myText;
    return (
        <div className="counter">
            <h1>{text}</h1>
            <CounterClass color="red" />
        </div>
        )
}

export default Counter;