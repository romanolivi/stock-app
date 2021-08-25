import React from 'react';


const Article = ({article, key}) => {
    return (
        <article className="news-section">
            <div className="card bg-dark text-white" style={{height: "34rem", width: "28rem"}}>
                <img src={article.image} alt={key} />
                <h2>{article.headline}</h2>
                <p>{article.summary}</p>
            </div>
        </article>
    )
}

export default Article;