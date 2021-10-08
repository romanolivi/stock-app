import React, { useState, useEffect } from 'react';
import data from '../data';
import { connect } from 'react-redux';
import Login from './Login';

const Home = (props) => {
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState(data);

    useEffect(() => {
        const lastIndex = data.length - 1;
        if(index < 0) {
            setIndex(lastIndex);
        } else if(index > lastIndex) {
            setIndex(0);
        }
        console.log(props.history);
    }, [index, cards])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => clearInterval(slider)
    }, [index])

    return (

        <div>
            {(props.loggedIn !== true) ? (
                <Login />
            ) : (
                <div className="content">
                <h2 className="home-head">Romano's Stock App</h2>
                <div className="underline"></div>

                <h2>{props.username}</h2>
                <div className="section-center">
                    {cards.map((card, i) => {
                        const {id, image, topic, desc} = card;
                        let position = "next";
                        if(i === index) {
                            position = "active";
                        }

                        if(i === index - 1 || (index === 0 && i === data.length)) {
                            position = "last";
                        }

                        return (
                            <div className="container">
                                <article className={position} key={id}>
                                    <img src={image} alt={topic} className="img-fluid" />
                                    <h4 className="card-description">{topic}</h4>
                                    <p className="card-description">{desc}</p>
                                </article>
                            </div>
                        )
                    }
                )}
                </div>
            </div>
            )}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        id: state.id,
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(Home);