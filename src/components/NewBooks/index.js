import React from 'react';
import {data} from "../../data/product";
import img1 from "../../img/image 6.png"
import img2 from "../../img/image 5.png"
import img3 from "../../img/image 7.png"

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
                            return <div className="">
                                <img src={el.image} alt=""/>
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