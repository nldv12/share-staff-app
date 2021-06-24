import React, {useState, useEffect} from "react";
import "./OddajHeader.scss"
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";


export const OddajHeader = ({user, handleLogOut}) => {


    return (
        <div className={"OddajHeader"}>
            <div className={"left_side"}>

            </div>
            <div className={"right_side"}>
                <div className={"account_nav_container"}>
                    <div className={"account"}>
                        <div className={"account_el user"}>Cześć {user.email}!</div>
                        <div onClick={handleLogOut} className={"account_el"}>Wyloguj się</div>

                    </div>
                    <div className={"nav"}>
                        <Link to="/user" smooth={true} className={"nav_el"}>Start</Link>
                        <LinkScroll to="HomeSteps" smooth={true} className={"nav_el"}>O co chodzi?</LinkScroll>
                        <LinkScroll to="HomeAboutUs" smooth={true} className={"nav_el"}>O nas</LinkScroll>
                        <LinkScroll to="HomeWhoWeHelp" smooth={true} className={"nav_el"}>Fundacja i organizacje</LinkScroll>
                        <LinkScroll to="HomeContact" smooth={true} className={"nav_el"}>Kontakt</LinkScroll>
                    </div>
                </div>
                <div className={"Home_content"}>
                    <div className={"Home_title"}>Oddaj rzeczy, których już nie chcesz<span>POTRZEBUJĄCYM</span> </div>
                    <div className={"Home_title_deco"}> </div>
                    <div className={"Home_sec_title"}>Wystarczą 4 proste kroki:</div>
                    <div className={"Home_title_diamonds"}>
                        <div className={"Home_title_single_diamond"}>
                            <div className="number">1</div>
                            <div className="desc">Wybierz <span> rzeczy</span></div>
                        </div>
                        <div className={"Home_title_single_diamond"}>
                            <div className="number">2</div>
                            <div className="desc">Spakuj je <span> w worki</span></div>
                        </div>
                        <div className={"Home_title_single_diamond"}>
                            <div className="number">3</div>
                            <div className="desc">Wybierz <span> fundację</span></div>
                        </div>
                        <div className={"Home_title_single_diamond"}>
                            <div className="number">4</div>
                            <div className="desc">Zamów <span> Kuriera</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}