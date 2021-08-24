import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';


const MarketNews = (props) => {
    const [news, setNews] = useState([]);
    
    let url = 'https://finnhub.io/api/v1/news?category=general&token=c2tseiaad3icl6gefg00'

    const fetchNews = () => {
        axios.get(url)
        .then((resp) => {
            setNews(resp.data.slice(0,5))
        })
        
        console.log(news);
    } 

    useEffect(() => {
        fetchNews();
        console.log(news);
    }, [props.id])

    const newsArticle = () => {
        if(news) {
            if(news[0]) {
                return (
                <div className="articles">
                    <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={news[0].image} alt={news.id} />
                        <h2>{news[0].headline}</h2>
                        <p>{news[0].summary}</p>
                    </div>

                    <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={news[1].image} alt={news.id} />
                        <h2>{news[1].headline}</h2>
                        <p>{news[1].summary}</p>
                    </div>

                    <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={news[2].image} alt={news.id} />
                        <h2>{news[2].headline}</h2>
                        <p>{news[2].summary}</p>
                        
                    </div>

                    <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={news[3].image} alt={news.id} />
                        <h2>{news[3].headline}</h2>
                        <p>{news[3].summary}</p>
                        
                    </div>

                    <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={news[4].image} alt={news.id} />
                        <h2>{news[4].headline}</h2>
                        <p>{news[4].summary}</p>
                        
                    </div>
                </div>
                )
            } else {
                <h1>Loading...</h1>
            }
        } else {
            <h1>Loading...</h1>
        }
    }

    return (
        <main className="content">
            <h1 className="home-head">Market News</h1>
            <div className="underline"></div>

            {/* <button onClick={fetchNews} type="submit" className='btn btn-primary'>Refresh</button> */}

            {newsArticle()}

        </main>
    )
}

export default MarketNews;
