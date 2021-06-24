import React from "react";
import "./Home.scss"
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeStatistics} from "./HomeStatistics/HomeStatistics";
import {HomeSteps} from "./HomeSteps/HomeSteps";
import {HomeAboutUs} from "./HomeAboutUs/HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp/HomeWhoWeHelp";
import {HomeContact} from "./HomeContact/HomeContact";


export const Home = ({user, handleLogOut}) => {
    // console.log(user.user)
    return (
        <div className={"Home"}>
            <HomeHeader user={user} handleLogOut={handleLogOut} />
            <HomeStatistics/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact user={user}/>
        </div>

    )
}