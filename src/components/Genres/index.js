import React from 'react';
import {Link} from "react-router-dom";
import cart1 from "../../img/cart1.svg"
import cart2 from "../../img/cart2.svg"
import cart3 from "../../img/cart3.svg"
import cart4 from "../../img/cart4.svg"
import cart5 from "../../img/cart5.svg"
import cart6 from "../../img/cart6.svg";

const Genres = () => {
    return (
        <div id="genres">
            <div className="container">
                <div className="genres">
                  <div className="genres--title">
                      <h1 className="genres--title__text">Genres</h1>
                      <div className="genres--title__view">
                          <Link onClick={() => window.scroll(0,0)} to="/allbooks"> View all</Link>
                      </div>
                  </div>
                    <div className="genres--image">
                        <img src={cart1} alt=""/>
                        <img src={cart2} alt=""/>
                        <img src={cart3} alt=""/>
                        <img src={cart4} alt=""/>
                        <img src={cart5} alt=""/>
                        <img src={cart6} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Genres;

