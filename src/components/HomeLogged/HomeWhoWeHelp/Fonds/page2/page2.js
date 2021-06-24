import React from "react";
import "./page2.scss"


export const Page2 = (props) => {
    return (
        <div className={"Page2"}>
            <div className={"list"}>
                <div className={"list_el list_el1"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Fundacja “Dbam o Zdrowie2”</div>
                        <div className={"desc"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
                    </div>
                </div>
                <div className={"list_el list_el2"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Fundacja “Dla dzieci2”</div>
                        <div className={"desc"}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, meble, zabawki</div>
                    </div>
                </div>
                <div className={"list_el list_el3"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Fundacja “Bez domu2”</div>
                        <div className={"desc"}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, jedzenie, ciepłe koce</div>
                    </div>
                </div>
            </div>

        </div>
        )
}