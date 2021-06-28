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
                                <Link to="/share-staff-app" onClick={handleClick} className={"nav-link"}>Start</Link>
                            </li>
                            <li className={"nav_item"}>
                                <Link to="/HomeSteps" onClick={handleClick} className={"nav-link"}>O co chodzi?</Link>
                            </li>
                            <li className={"nav_item"}>
                                <Link to="/HomeAboutUs" onClick={handleClick} className={"nav-link"}>O nas</Link>
                            </li>
                            <li className={"nav_item"}>
                                <Link to="/HomeWhoWeHelp" onClick={handleClick} className={"nav-link"}>Fundacja i
                                    organizacje</Link>
                            </li>
                            <li className={"nav_item"}>
                                <Link to="/HomeContact" onClick={handleClick} className={"nav-link"}>Kontakt</Link>
                            </li>

                        </ul>

                    </nav>

                </div>

            </div>

        </>

    )
}