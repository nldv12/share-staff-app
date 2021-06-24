import React from "react";
import "./LogOut.scss"
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";


export const LogOut = () => {

    return (
        <div className={"LogOut"}>
            <div className={"account_nav_container"}>
                <div className={"account"}>
                    <Link to="/Login" className={"account_el"}>Zaloguj</Link>
                    <Link to="/SignUp" className={"account_el"}>Załóż konto</Link>
                    {/*<div className={"account_el"}>Zaloguj</div>*/}
                    {/*<div className={"account_el"}>Załóż konto</div>*/}
                </div>
                <div className={"nav"}>
                    <LinkScroll to="HomeHeader" smooth={true} className={"nav_el"}>Start</LinkScroll>
                    <LinkScroll to="HomeSteps" smooth={true} className={"nav_el"}>O co chodzi?</LinkScroll>
                    <LinkScroll to="HomeAboutUs" smooth={true} className={"nav_el"}>O nas</LinkScroll>
                    <LinkScroll to="HomeWhoWeHelp" smooth={true} className={"nav_el"}>Fundacja i organizacje</LinkScroll>
                    <LinkScroll to="HomeContact" smooth={true} className={"nav_el"}>Kontakt</LinkScroll>
                </div>
            </div>
            <div className={"LogOut_container"}>
                <div className={"title"}>Wylogowanie nastąpiło pomyślnie!</div>
                <div className={"deco"}></div>
                    <Link to="/" className={"btn"}>Strona główna</Link>



            </div>
        </div>

    )
}