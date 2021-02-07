import React from 'react'
import './css/StatsRow.css'
import StockSVG from './images/stock.svg'
import { db } from './firebase'

function StatsRow(props) {
    const stockPercentage = () => {
        const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
        var numberPercentage = Number(percentage).toFixed(2);
        if (percentage < 0){
           return numberPercentage
        } else {
           return "+" + numberPercentage
        }
    }
    
    const buyStock = () => {
        db.collection('myStocks')
        .where("ticker", "==", props.name)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty){
                // update record
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    db.collection('myStocks')
                    .doc(doc.id)
                    .update({
                        shares: doc.data().shares+=1
                    })
                    console.log(doc.id, " => ", doc.data());
                });
            } else {
                db.collection('myStocks')
                .add({
                    ticker: props.name,
                    shares: 1
                })
            }
        })
    }
    return (
        <div className="row" onClick={buyStock}>
            <div className="row__intro">
                <h1>{props.name}</h1>
                <p>{props.volume && (props.volume + " shares")}</p>
            </div>
            <div className="row__chart">
                <img src={StockSVG} height={16} alt="Stock Svg" />
            </div>
            <div className="row__numbers">
                <p className="row__price">{props.price}</p>
                <p className={ stockPercentage().includes("-") ? "row__percentage-negative": "row__percentage-positive" }>
                    {stockPercentage()}%
                </p>

            </div>
            
        </div>
    )
}

export default StatsRow
