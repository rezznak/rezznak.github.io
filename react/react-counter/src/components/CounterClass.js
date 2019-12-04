import React from 'react';
import './Counter.css';

class CounterClass extends React.Component {
    constructor(props) {
        //wywołuję konstruktor dla Component
        super(props);
    }
    render() {
        const text = 'Komponent funkcyjny Counter';
        // jesli chcemy korzystać ze znacznika style (w div poniżej) musimy zadeklarowac zmienną obiekt. tutaj color
        const color = {
            'backgroundColor': this.props.color
        }
        return(
            <div className="counter counter--dark" style={color}>
            <h1>{text}</h1>
        </div>
        )
    }
}

export default CounterClass;

//lub import React, {Component} from 'react'
//i wtedy class CounterClass extends Component