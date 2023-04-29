import React from 'react';
import {Link} from "react-router-dom";
import {data} from "../../data/product";

const Genres = () => {
    return (
        <div id="genres">
            <div className="container">
                <div className="genres">
                    <div className="genres--title">
                        <h1 className="genres--title__text">Genres</h1>
                        <div className="genres--title__view">
                            <Link onClick={() => window.scroll(0, 0)} to="/allbooks"> View all</Link>
                        </div>
                    </div>
                    {
                        data.map(el =>{
                            return <div className="genres--image">
                                <img src={el.image} alt=""/>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Genres;