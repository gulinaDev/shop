import React from 'react';
import {data} from "../../data/product";

const NewBooks = () => {
    return (
        <div id="newBooks">
            <div className="container">
                <div className="newBooks">
                    <h1 className="newBooks--title">New Books</h1>
                    <div className="newBooks--group">
                    {
                        data.filter(el => {
                            if (el.type === "New Books") {
                                return el
                            }
                        }).map(el => {
                            return <div className="newBooks--group__block">
                                <img src={el.image} alt="" className="newBooks--group__block--image"/>
                                <h1 className="newBooks--group__card--text">{el.title}</h1>
                                <p className="newBooks--group__card--span">{el.desc}</p>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewBooks;