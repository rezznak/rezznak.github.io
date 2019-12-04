import React from 'react';
import axios from 'axios';
import './Crypto.css';
import CryptoList from './CryptoList';

export default class Crypto extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            currency: [],
            filteredCryptoList: [],
        }
        // w axiosie jesli nie uzywamy funkcji strzałkowej nie ES5 (function(){}) wtedy w konstruktorze trzeba "zamontowac" this.getCryptoData = this.getCryptoData.bind(this)
    }

    getCryptoData = () => {
        axios.get(`https://blockchain.info/pl/ticker`)
        .then(res => {
// pobieramy dane, dopiero kiedy (.then) otrymamy odpowiedź, wykonuje się funkcja (res =>) gdzie do zmiennej(ticker) przypisujemy elementy (res.data), nastepnie metodą Object.keys tworzymy tablicę z kluczy obiektu zeby uzyc metody map
            const ticker = res.data;
            let currencyArray = [];
            let lastStateCurrencyArray = this.state.currency;
            currencyArray = Object.keys(ticker).map( key => {
                // console.log(key);
                //let arrow = "";
                let currencyObj = {};
                currencyObj.currency = key;
                currencyObj.symbol = ticker[key].symbol;
                currencyObj.buy = ticker[key].buy;
                currencyObj.sell = ticker[key].sell;
                currencyObj.last = ticker[key].last;
                currencyObj.class = ticker[key];

                // let lastObj = lastStateCurrencyArray.find(lastObj => {
                    //return cryptoObj.symbol === lastObj.symbol
                    //i porownać miedzy lasta a currency
                //})

                
                if (currencyObj.last<currencyObj.sell) {
                    currencyObj.class = "green";
                    currencyObj.arrow = String.fromCharCode(8599);
                } else if (currencyObj.last==currencyObj.sell) {
                    currencyObj.class = "blue";
                    currencyObj.arrow = String.fromCharCode(8212)
                } else if (currencyObj.last>currencyObj.sell) {
                    currencyObj.class = "red";
                    currencyObj.arrow = String.fromCharCode(8600);
                };
                
                return currencyObj;

            })
            this.setState({
                currency: currencyArray,
            })

            this.filterCryptoList();
            //console.log(this.state);
            // console.log(Object.keys(ticker)); 
        })

        
    }
        
    

    componentDidMount() {
        // console.log('KOmpot się rozlał')
        this.getCryptoData();

        

        this.timer = setInterval(this.getCryptoData,5000)
    }

    filterCryptoList = () => {
        //console.log("filtrujem, a co!")
        this._filterInput.value = this._filterInput.value.trim();

        let filteredCryptoList = this.state.currency;
        let filter = this._filterInput.value.toUpperCase();

        filteredCryptoList = filteredCryptoList.filter( curObj => {
            return(curObj.currency.search(filter) !== -1)
        })

        this.setState({
            filteredCryptoList: filteredCryptoList,
        })
    }




    render() {
        return(
            <div className="Crypto">
                <input type="text" placeholder="Wyszukaj" ref={element => this._filterInput = element} onChange={this.filterCryptoList}/>
                <CryptoList currencyArray={this.state.filteredCryptoList}/>
            </div>
        )
    }
}