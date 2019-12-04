import React, {Component} from 'react';
import './CryptoList.css';

export default class CryptoList extends Component {
    
    render() {
        let cryptoRate = this.props.currencyArray;
        let listDisp = cryptoRate.map(crypto => {
            
            return(
                <li key={crypto.currency} className="CryptoListLi">
                    <span className="CryptoLabel"> Last Rate: </span> <span className={crypto.class + "CryptoSymbol"}> {crypto.sell} {crypto.arrow} </span> <span className="CryptoSymbol"> {crypto.symbol} </span> <span className="CryptoCurrency"> {crypto.currency} </span>
                </li>
            )
        });
        console.log("tic-toc")
        return(
            <div className="CryptoList">
                <ul className="CryptoListUl">{listDisp}</ul>
            </div>
        )
    }
}