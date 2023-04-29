import React, {useState} from 'react';
import axios from "axios";

const AllBooks = () => {
    const [book,setBook] = useState([])

    const getBook = () => {
      axios(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`)
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
    }
    return (
        <div id="allBooks">
            <div className="container">
                <div className="all">
                    <div className="allBooks--title">
                        <h1>All Books</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="allBooks--title__select">
                        <div className="allBooks--title__select--filter">
                            <h3>Filters  </h3>
                            <a>Clear filters</a>
                        </div>
                        <div className="allBooks--title__select--select">
                            <select>
                                <option value=""> <span>Sort By</span>Popular</option>
                                <option value=""> <span>Sort By</span>Top</option>
                                <option value=""> <span>Sort By</span>Top</option>
                            </select>
                        </div>
                    </div>
                    <div className="allBooks">
                        <div className="allBooks--title__right--input">
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Autographed Books</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Sci-Fi</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">For kids</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">For teenagers</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Finance</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Detective</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Romantic</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Psychology</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Self-Improvement</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Educational</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Literature</label> <br/>
                            <input type="radio" id="autographed" name="autographed"/>
                            <label htmlFor="autographed">Religion</label> <br/>
                        </div>
                        <div className="allBooks--img">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;

//https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU