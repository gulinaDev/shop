import React from 'react';
import Genres from "../Genres";

const Hero = () => {
    return (
        <div id="hero">
             <div className="container">
                 <div className="hero">
                     <h1 className="Hero--tittle">Welcome to our Bookshops</h1>
                     <h4 className="Hero--text">A place where you can get all the books you want!</h4>
                 </div>
             </div>
            <Genres/>
        </div>
    );
};

export default Hero;