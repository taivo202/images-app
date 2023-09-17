import "./Header.css"
import {
    Button
} from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Monochromatic",
        url: "/t/monochromatic",
    },
    {
        display: "Wallpapers",
        url: "/t/wallpapers",
    },
    {
        display: "3D Renders",
        url: "/t/3d-renders",
    },
    {
        display: "Nature",
        url: "/t/nature",
    },
    {
        display: "Textures & Patterns",
        url: "/t/textures-patterns",
    },
    {
        display: "Architecture & Interiors",
        url: "/t/architecture-interiors",
    },
    {
        display: "Film",
        url: "/t/film",
    },
    {
        display: "Street Photography",
        url: "/t/street-photography",
    },
    {
        display: "Experimental",
        url: "/t/experimental",
    },
    {
        display: "Animals",
        url: "/t/animals",
    }
];

const Header = () => {

    return (
        <header className="header" >
            <div className="navigation">
                <img src="https://unsplash.com/assets/core/logo-black-ddbdd505b663faadbc1e1731369f0929b2616886cb1d7fe11237c473bba02a50.svg" alt="" className="logo" />
                <input type="search" placeholder="" />
                <ul className="nav__list">
                    {NAV__LINKS.map((item, index) => (
                        <li className="nav__item" key={index}>
                            <NavLink
                                to={item.url}
                                className={(navClass) =>
                                    navClass.isActive ? "active" : ""
                                  }
                            >
                                {item.display}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            {/* <div class="scrollable-tabs-container">
                <div class="left-arrow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </div>

                <ul>
                    <li>
                        <a href="#" class="active">All</a>
                    </li>

                    <li>
                        <a href="#">Music</a>
                    </li>

                    <li>
                        <a href="#">Chess</a>
                    </li>

                    <li>
                        <a href="#">Live</a>
                    </li>

                    <li>
                        <a href="#">Gaming</a>
                    </li>

                    <li>
                        <a href="#">Editing</a>
                    </li>

                    <li>
                        <a href="#">Mixing consoles</a>
                    </li>

                    <li>
                        <a href="#">Comedy</a>
                    </li>

                    <li>
                        <a href="#">Computer Hardware</a>
                    </li>

                    <li>
                        <a href="#">News</a>
                    </li>

                    <li>
                        <a href="#">Computer Programming</a>
                    </li>

                    <li>
                        <a href="#">Video Editing Software</a>
                    </li>

                    <li>
                        <a href="#">Sports</a>
                    </li>
                </ul>

                <div class="right-arrow active">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div> */}

        </header>
    )
};

export default Header;