import React, { useState, useEffect } from 'react'
import './css/Stats.css'

function Stats() {

    const [ stockData, setStockData ] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats_rows">

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
