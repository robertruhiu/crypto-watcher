import React, { Component } from 'react';
import Cryptocurrency from './Cryptocurrency'
import axios from 'axios'
import './Watcher.css';

class Watcher extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: [
                    {
                        id: "bitcoin",
                        name:"Bitcoin",
                        price: "1",
                        symbol:"BTC",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"
                    },
                    {
                        id: "ethereum",
                        name:"Ethereum",
                        price: "1",
                        symbol:"ETH",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"

                    },

                    {
                        id: "litecoin",
                        name:"Litecoin",
                        price: "1",
                        symbol:"LTC",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"

                    },

                    {
                        id: "ripple",
                        name:"Ripple",
                        price: "1",
                        symbol:"XFC",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"

                    },

                    {
                        id: "dash",
                        name:"Dash",
                        price: "1",
                        symbol:"DASH",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"

                    },

                    {
                        id: "monero",
                        name:"Monero",
                        price: "1",
                        symbol:"XMR",
                        price_usd:"1",
                        percentage_change_1h:"0",
                        percentage_change_24h:"0",
                        percentage_change_7d:"0"

                    }
                ]
            };
        }
        componentDidMount() {
            this.fetchCryptocurrencyData();
            this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
        }

        fetchCryptocurrencyData() {
            axios.get("https://api.coinmarketcap.com/v1/ticker/")
                .then(response => {
                    const wanted = ["bitcoin", "ethereum", "litecoin","ripple","monero","dash"];
                    const result = response.data.filter(currency => wanted.includes(currency.id));
                    this.setState({ data: result});
                })
                .catch(err => console.log(err));
        }

        render() {
            var tickers = this.state.data.map((currency) =>
                <Cryptocurrency data={currency} key={currency.id}/>
            );
            return (
                <div className="tickers-container">
                    <ul className="tickers">{tickers}</ul>

               </div>
            );
        }
    }

    export default Watcher;
