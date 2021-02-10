import React, { useState } from 'react'
import './css/Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import Chip from '@material-ui/core/Chip'
import { Avatar } from "@material-ui/core"
import {buyStock} from "./StatsRow"
import { db } from './firebase'

function Newsfeed() {
    const [ popularTopics, setPopularTopics ] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
      ]);

    //   const totalValue = () => {
    //     const startValue = "256,789";
    //     const boughtStock = () => {
    //         db.collection('myStocks')
    //                 .doc(doc.id)
    //                 .update({
    //                     shares: doc.data().shares+=1
    //                 })
    //                 db.collection('myStocks').on('shares', (snapshot) => {
    //                     const data = snapshot.val();
    //                     updateStarCount(postElement, data);
    //                   });
    //     }
    //     if (buyStock) {
    //         return startValue += 
    //     }
    //   }

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
                        <TimeLine />
                    </div>
                </div>
                <div className="newsfeed__buying__section">
                    <h2> Buying Power</h2>
                    <h2>$768.56</h2>
                </div>
                <div className="newsfeed__market__section">
                    <div className="newsfeed__market__box">
                        <p> Markets Closed</p>
                        <h1> Happy Thanksgiving</h1>
                    </div>
                </div>
                <div className="newsfeed__popularlists__section">
                    <div className="newsfeed__popularlists__intro">
                        <h1>Popular lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsfeed_popularlists_badges">
                        {popularTopics.map((topic) => (
                            <Chip 
                                className="topic__badge"
                                variant="outlined"
                                label={topic}
                                avatar={<Avatar
                                src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
