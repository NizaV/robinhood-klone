import React from 'react'
import './css/Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
    return (
        <div className="newsFeed">
            <div className="newsfeed__container">
                <div className="newsFeed__chartSection">
                    <div className="newsFeed__portfolio">
                        <h1>$114,656</h1>
                        <p>+$44.63 (+0.04%) Today</p>

                    </div>
                    <div className="newsFeed__chart">
                        <LineGraph />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsfeed
