import React, { useState, useEffect } from 'react'
import './css/Stats.css'
import axios from "axios";
import StatsRow from './StatsRow'

const TOKEN = "c0dm82n48v6sgrj3a0cg";
const BASE_URL = "https://finnhub.io/api/v1/quote";

function Stats() {

    const [ stockData, setStockData ] = useState([]);

    const getStockData = (stock) => {
        return axios
        .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
        .catch((error) => {
            console.error("Error", error.message);
        });
    };

    useEffect(() => {
        let testData = []
        const stockslist = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let promises = [];
        stockslist.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res) => {
                    testData.push({
                        name: stock,
                        ...res.data
                    });
                })
            )
        });

        Promise.all(promises).then(() => {
            setStockData(testData);
        })
    }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats_rows">
                        {stockData.map((stock) => (
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                volume={stock.data.share}
                                price={stock.info.c}
                            />
                        ))}
                    </div>
                </div>
                <div className="stats__header">
                    <p>Lists</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
