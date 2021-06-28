import React from "react";
// import "./Local.scss"


export const Local = (props) => {
    return (
        <div className={"org"}>
            <div className={"content_desc"}>W naszej bazie znajdziesz listę zweryfikowanych Zbiórek, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
            <div className={"page"}>
            <div className={"list"}>
                <div className={"list_el list_el1"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Zbiórka “Dbam o Zdrowie”</div>
                        <div className={"desc"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
                    </div>
                </div>
                <div className={"list_el list_el2"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Zbiórka “Dla dzieci”</div>
                        <div className={"desc"}>Cel i misja: Pomoc dzieciom z ubogich rodzin.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, meble, zabawki</div>
                    </div>
                </div>
                <div className={"list_el list_el3"}>
                    <div className={"left_side"}>
                        <div className={"list_title"}>Zbiórka “Bez domu”</div>
                        <div className={"desc"}>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</div>
                    </div>
                    <div className={"right_side"}>
                        <div className={"right_desc"}>ubrania, jedzenie, ciepłe koce</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
}