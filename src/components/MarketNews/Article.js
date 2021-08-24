import React from 'react';


const Article = ({article}) => {
    return (
        <article className="news-section">
            <div className="header">
                <h2>{article.headline}</h2>
            </div>
        </article>
    )
}

export default Article;