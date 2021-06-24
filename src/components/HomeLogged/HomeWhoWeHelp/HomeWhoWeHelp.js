import React, {useState} from "react";
import "./HomeWhoWeHelp.scss"
import {Fonds} from "./Fonds/Fonds";
import {ThirdPartOrg} from "./ThirdPartOrg/ThirdPartOrg";
import {Local} from "./Local/Local";





export const HomeWhoWeHelp = () => {
    const [who, setWho] = useState("Fonds");

    const handleClickFonds = () => {
        setWho("Fonds")
    }
    const handleClickThirdPartOrg = () => {
        setWho("ThirdPartOrg")
    }
    const handleClickLocal = () => {
        setWho("Local")
    }

    if (who==="Fonds") {
        return (
            <div className={"HomeWhoWeHelp"}>
                <div className={"content"}>
                    <div className={"title"}>Komu pomagamy?</div>
                    <div className={"deco"}> </div>
                    <div className={"who"}>
                        <div onClick={handleClickFonds} className={"who_el who_el1"}>Fundacjom</div>
                        <div onClick={handleClickThirdPartOrg} className={"who_el"}>Organizacjom pozarządowym</div>
                        <div onClick={handleClickLocal} className={"who_el"}>Lokalnym zbiórkom</div>
                    </div>
                    <Fonds/>
                </div>
            </div>
        )
    } else if (who==="ThirdPartOrg") {
        return (
            <div className={"HomeWhoWeHelp"}>
                <div className={"content"}>
                    <div className={"title"}>Komu pomagamy?</div>
                    <div className={"deco"}> </div>
                    <div className={"who"}>
                        <div onClick={handleClickFonds} className={"who_el"}>Fundacjom</div>
                        <div onClick={handleClickThirdPartOrg} className={"who_el who_el2"}>Organizacjom pozarządowym</div>
                        <div onClick={handleClickLocal} className={"who_el"}>Lokalnym zbiórkom</div>
                    </div>
                    <ThirdPartOrg/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={"HomeWhoWeHelp"}>
                <div className={"content"}>
                    <div className={"title"}>Komu pomagamy?</div>
                    <div className={"deco"}> </div>
                    <div className={"who"}>
                        <div onClick={handleClickFonds} className={"who_el"}>Fundacjom</div>
                        <div onClick={handleClickThirdPartOrg} className={"who_el"}>Organizacjom pozarządowym</div>
                        <div onClick={handleClickLocal} className={"who_el who_el3"}>Lokalnym zbiórkom</div>
                    </div>
                    <Local/>
                </div>
            </div>
        )
    }
}