import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';


const StockSearch = () => {
    const [stock, setStock] = useState();

    const fetchStock = (e) => {
        e.preventDefault();
        let API_KEY = 'c2tseiaad3icl6gefg00'
        let url = `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&token=${API_KEY}`

        axios.get(url)
        .then((resp) => {
            setStock(resp.data);
            console.log(resp.data)
        })
        .catch(() => {
            console.log("Error while fetching stock data")
        })

    }

    const handleChange = (e) => {
        e.preventDefault();
        setStock(e.target.value);
    }

    const stockCard = () => {
        if(stock && stock.name) {
            return (
                <div className="card bg-dark text-white">
                    <div className="card-body">
                        <h4 className="card-title">{stock.name}</h4>
                        <div className="underline"></div>
                        <img src={stock.logo} alt={stock.ticker} className="card-image" />
                        <p className="card-text"> <strong>Ticker: {stock.ticker}</strong></p>
                        <p className="card-text"><strong>Industry: {stock.finnhubIndustry}</strong></p>
                        <p className="card-text"><strong>Market Cap: <NumberFormat value={stock.marketCapitalization} displayType={'text'} thousandSeparator={true} />T </strong></p>
                        <p className="card-text"><strong>Shares Outstanding: <NumberFormat value={stock.shareOutstanding} displayType={'text'} thousandSeparator={true}/> </strong></p>
                        <a href={stock.weburl}>{stock.name} Website</a>
                    </div>
                    
                </div>
            )
        }
    }

    useEffect(() => {
        
    })

    return (
        <main className="content">
            <h2 className="home-head">Stock Search</h2>
            <div className="underline"></div>

            <form>
                <div className="form-group">
                    <label className="form-label">Stock Ticker</label>
                    <input type="text" name="stock" className="form-control" placeholder="Enter Stock" onChange={handleChange} />
                    <button type="submit" id="button" className="btn btn-primary mb-2" onClick={fetchStock}>Search</button>
                </div>
            </form>

            {stockCard()}
        </main>

    )

}

export default StockSearch;