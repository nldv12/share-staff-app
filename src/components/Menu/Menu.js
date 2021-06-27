import React, {useState} from "react";
import "./Menu.scss"
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";



export const Menu = () => {
    const [burger, setBurger] = useState(true);

    const handleClick = () => {
        setBurger(!burger)
    }


    return (

        <>
            <div className={"Menu"}>
                <div className={"container"}>
                    <div onClick={handleClick} className={"hamburger-menu"}>
                        <div className={burger ? "line" : "line line-1"}> </div>
                        <div className={burger ? "line" : "line line-2"}> </div>
                        <div className={burger ? "line" : "line line-3"}> </div>
                    </div>
                    <nav className={burger ? "hideNavbar" : "showNavbar"}>

                        <ul className={"nav-list"}>
                            <li className={"nav_item"}>
                                <LinkScroll to="HomeHeader" smooth={true} className={"nav-link"}>Start</LinkScroll>
                            </li>
                            <li className={"nav_item"}>
                                <LinkScroll to="HomeSteps" smooth={true} className={"nav-link"}>O co chodzi?</LinkScroll>
                            </li>
                            <li className={"nav_item"}>
                                <LinkScroll to="HomeAboutUs" smooth={true} className={"nav-link"}>O nas</LinkScroll>
                            </li>
                            <li className={"nav_item"}>
                                <LinkScroll to="HomeAboutUs" smooth={true} className={"nav-link"}>Fundacja i
                                    organizacje</LinkScroll>
                            </li>
                            <li className={"nav_item"}>
                                <LinkScroll to="HomeAboutUs" smooth={true} className={"nav-link"}>Kontakt</LinkScroll>
                            </li>

                        </ul>

                    </nav>

                </div>

            </div>

        </>

    )
}