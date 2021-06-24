import React from "react";
import "./Home.scss"
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeStatistics} from "./HomeStatistics/HomeStatistics";
import {HomeSteps} from "./HomeSteps/HomeSteps";
import {HomeAboutUs} from "./HomeAboutUs/HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp/HomeWhoWeHelp";
import {HomeContact} from "./HomeContact/HomeContact";


export const Home = () => {

    return (
        <div className={"Home"}>
            <HomeHeader/>
            <HomeStatistics/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </div>

    )
}