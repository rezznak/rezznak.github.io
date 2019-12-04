import React, {Component} from 'react';
import ButtonsPanel from './ButtonsPanel';
import Title from './Title';
import './Counter.css';

// Tylko komponenty klasowe posiadają stan this.state

export default class Counter extends Component {
    constructor(props) {
        super(props);
        /// stan komponentu inicjujemy w kostruktorach
        let iValue = (this.props.initValue == undefined) ? 0 : this.props.initValue;

        this.state = {
            value: iValue
        }
    }

    changeValue = () => {
        this.setState((prevState) => {
            console.log('Wywołuję na click w ButtonsPanel metodę utworzoną w rodzicu (Counter)');
            return {
                value: prevState.value + 1
            }
        })
    }
    resetCounter = () => {
        
        this.setState(() => {
            return {
                value: 0
            }
        })
        
    }
    resetToInit = () => {

        this.setState(() => {
            
            return {
                value: this.props.initValue
            }
        })
    }


    render() {
        return (
            <div className="counter-component">
                <Title valueCounter={this.state.value} />
                <ButtonsPanel actionCallback={this.changeValue} resetCallback={this.resetCounter} initCallback={this.resetToInit}/>    
            </div>
        )
    }
}