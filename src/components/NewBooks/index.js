import React from 'react';
import Books from "../Books";
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
                        <div className="newBooks--group__card1">
                            <img src={img1} alt=""/>
                            <h1 className="newBooks--group__card--text">The Climate Book: The Facts and the Solutions</h1>
                            <p className="newBooks--group__card--span">by Greta Thunberg</p>
                        </div>
                        <div className="newBooks--group__card">
                            <img src={img2} alt=""/>
                            <h1 className="newBooks--group__card--text">Rest Is Resistance: A Manifesto</h1>
                            <p className="newBooks--group__card--span">by Tricia Hersey</p>
                        </div>
                        <div className="newBooks--group__card1">
                            <img src={img3} alt=""/>
                            <h1 className="newBooks--group__card--text">A New Name: Septology VI-VII</h1>
                            <p className="newBooks--group__card--span">by Jon Fosse</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewBooks;