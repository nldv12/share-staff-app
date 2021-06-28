import React from "react";
import {HomeHeader} from "./HomeHeader/HomeHeader";
import {HomeStatistics} from "../Home/HomeStatistics/HomeStatistics";
import {HomeSteps} from "./HomeSteps/HomeSteps";
import {HomeAboutUs} from "../Home/HomeAboutUs/HomeAboutUs";
import {HomeWhoWeHelp} from "../Home/HomeWhoWeHelp/HomeWhoWeHelp";
import {HomeContact} from "../Home/HomeContact/HomeContact";


export const Home = ({user, handleLogOut}) => {
    // console.log(user.user)
    return (
        <div className={"Home"}>
            <HomeHeader user={user} handleLogOut={handleLogOut} />
            <HomeStatistics/>
            <HomeSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContact />
        </div>

    )
}