import React from "react";
import "./HomeHeader.scss"
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";



export const HomeHeader = () => {

    return (
        <div className={"HomeHeader"}>
            <div className={"left_side"}>

            </div>
            <div className={"right_side"}>
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
                <div className={"Home_content"}>
                <div className={"Home_title"}>Zacznij pomagaćcccccc! <span>Oddaj niechciane rzeczy w zaufane ręce </span> </div>
                <div className={"Home_title_deco"}> </div>
                <div className={"Home_title_bottons"}>
                    <Link to="/Login" className={"Home_title_single_botton"}>Oddaj <span>rzeczy</span></Link>
                    <Link to="/Login" className={"Home_title_single_botton"}>Zorganizuj <span> zbiórkę</span></Link>
                </div>
                </div>
            </div>


        </div>

    )
}