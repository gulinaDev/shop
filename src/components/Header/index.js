import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {RiShoppingBagLine} from "react-icons/ri";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--nav">
                            <NavLink to={"/"} className="header--nav__title">Bookshop</NavLink>
                            <NavLink to={"/genres"} className="header--nav__title">Categories</NavLink>
                            <NavLink to={"/newbooks"} className="header--nav__title">Recent</NavLink>
                            <NavLink to={"/books"} className="header--nav__title">Books</NavLink>
                            <NavLink to={"/about"} className="header--nav__title">About Us</NavLink>
                    </div>

                    <div className="header--inputs">
                        <div className="header--inputs__search" style={{}}>
                            <FaSearch className="icon"/>
                            <Link><RiShoppingBagLine className="header--inputs__bags"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;