import React, {Component} from 'react';
import './ButtonsPanel.css';

class ButtonsPanel extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.actionCallback()
        //console.log('dziala');
    }
    handleReset = () => {
        this.props.resetCallback()
        //console.log('zeruję');
    }
    handleInit = () => {
        this.props.initCallback()
        console.log('resetuję do default');

    }

    render() {
        return (
            <div className="btns">
                    <button onClick={this.handleClick}>Zwiększ licznik</button>
                    <button onClick={this.handleReset}>Zeruj</button>
                    <button onClick={this.handleInit}>Początkowa</button>
            </div>
        );
    }
}

export default ButtonsPanel;