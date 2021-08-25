import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MarketNews = () => {
    const [news, setNews] = useState([]);
    const [amount, setAmount] = useState(5);
    
    let url = 'https://finnhub.io/api/v1/news?category=general&token=c2tseiaad3icl6gefg00'

    const fetchNews = () => {
        axios.get(url)
        .then((resp) => {
            setNews(resp.data.slice(0, parseInt(amount)))
        })
    }

    useEffect(() => {
        fetchNews();
        console.log(news);
    }, [amount])

    const selectChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setAmount(e.target.value);
    }

    return (
        <main className="content">
            <h1 className="home-head">Market News</h1>
            <div className="underline"></div>

            <select class="form-select bg-dark text-white" style={{width: "20rem"}} aria-label="Default select example" onChange={selectChange}>
                <option selected>Select number of Articles to view</option>
                <option value={5}>Five</option>
                <option value={10}>Ten</option>
                <option value={15}>Fifteen</option>
            </select>

            
            <div className="articles">
                {news.map((article) => {
                    console.log("hey");
                    return (
                    <section className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                        <img src={article.image} alt={"Article"} />
                        <h2>{article.headline}</h2>
                        <p>{article.summary}</p>
                    </section>
                    )
                })}

            </div>
            

        </main>
    )
}

export default MarketNews;
