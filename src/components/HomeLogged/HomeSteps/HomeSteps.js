import React from "react";
import "./HomeSteps.scss"
import {Link} from "react-router-dom";



export const HomeSteps = () => {

    return (
        <div className={"HomeSteps"}>
            <div className={"first_div"}>
                <div className={"first_title"}>Wystarczą 4 proste kroki</div>
                <div className={"first_deco"}> </div>
            </div>
            <div className={"sec_div"}>
                <div className={"sec_div_elements"}>
                    <div className={"sec_div_el"}>
                        <div className={"picto picto1"}></div>
                        <div className={"title"}>Wybierz rzeczy</div>
                        <div className={"line"}></div>
                        <div className={"desc"}>ubrania, zabawki, sprzęt i inne</div>
                    </div>
                    <div className={"sec_div_el"}>
                        <div className={"picto picto2"}></div>
                        <div className={"title"}>Spakuj je</div>
                        <div className={"line"}></div>
                        <div className={"desc"}>skorzystaj z worków na śmieci</div>
                    </div>
                    <div className={"sec_div_el"}>
                        <div className={"picto picto3"}></div>
                        <div className={"title"}>Zdecyduj komu chcesz pomóc</div>
                        <div className={"line"}></div>
                        <div className={"desc"}>wybierz zaufane miejsce</div>
                    </div>
                    <div className={"sec_div_el"}>
                        <div className={"picto picto4"}></div>
                        <div className={"title"}>Zamów kuriera</div>
                        <div className={"line"}></div>
                        <div className={"desc"}>kurier przyjedzie w dogodnym terminie</div>
                    </div>
                </div>

            </div>
            <div className={"third_div"}>
                <Link to="/OddajRzeczy" className={"button"}>ODDAJ <span>RZECZY</span></Link>
            </div>


        </div>

    )
}