import React from "react";
import "./HomeStatistics.scss"


export const HomeStatistics = () => {

    return (
        <div className={"HomeStatistics"}>
            <div className={"HomeStatistics_container"}>
                <div className={"single_statistic"}>
                    <div className={"single_statistic_number"}>10</div>
                    <div className={"single_statistic_title"}>ODDANYCH WORKÓW</div>
                    <div className={"single_statistic_desc"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className={"single_statistic"}>
                    <div className={"single_statistic_number"}>5</div>
                    <div className={"single_statistic_title"}>WSPARTYCH ORGANIZACJI</div>
                    <div className={"single_statistic_desc"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>
                <div className={"single_statistic"}>
                    <div className={"single_statistic_number"}>7</div>
                    <div className={"single_statistic_title"}>ZORGANIZOWANY ZBIÓREK</div>
                    <div className={"single_statistic_desc"}>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</div>
                </div>

            </div>


        </div>

    )
}