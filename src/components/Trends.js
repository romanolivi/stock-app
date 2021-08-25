import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Trends = () => {
    const [stock, setStock] = useState();
    const [search, setSearch] = useState();
    const url = `https://finnhub.io/api/v1/stock/recommendation?symbol=${search}&token=c2tseiaad3icl6gefg00`;

    const fetchData = (e) => {
        e.preventDefault();

        axios.get(url)
        .then((resp) => {
            setStock(resp.data[0]);
            console.log(resp.data[0]);
        })
        .catch( console.log("Error fetching data"))

    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const createCard = () => {
        if(stock) {
            const max = Math.max(stock.buy, stock.sell, stock.hold);
            let color;
            if(max === stock.buy) {
                color = "card bg-success text-white";
            } else if(max === stock.hold) {
                color = "card bg-warning text-black";
            } else {
                color = "card bg-danger text-black"
            }
            return (
                <div>
                    <div className={color} style={{height: "18rem"}}>
                        <div className="card-body">
                            <h4 className="card-title">{stock.symbol}</h4>
                            <div className="underline"></div>
                            <p className="card-text"> <strong>Buy: {stock.buy}</strong></p>
                            <p className="card-text"><strong>Hold: {stock.hold}</strong></p>
                            <p className="card-text"><strong>Sell: {stock.sell}</strong></p>
                            <p className="card-text"><strong>Strong Buy: {stock.strongBuy}</strong></p>
                            <p className="card-text"><strong>Strong Sell: {stock.strongSell} </strong></p>
                        </div>
                    </div>
                </div>
            )
        }
    }


    return (
        <main className="content">

            <form onSubmit={fetchData}>
                <div className="form-group">
                    <label className="form-label" for="stock">Enter Stock Ticker For Trends!</label>
                    <input className="form-control" type="text" placeholder="Enter Ticker" onChange={handleChange} />
                    <button id="button" className="btn btn-secondary" type="submit">Submit</button>
                </div>
            </form>

            {createCard()}
            
        </main>
    )
    
}

export default Trends;