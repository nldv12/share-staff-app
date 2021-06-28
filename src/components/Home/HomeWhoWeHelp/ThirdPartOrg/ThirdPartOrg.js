import React, {useState} from "react";
import {Page1} from "./page1";
import {Page2} from "./page2";


export const ThirdPartOrg = (props) => {
    const [page, setPage] = useState("1");

    const handleClickPage1 = () => {
        setPage("1")
    }
    const handleClickPage2 = () => {
        setPage("2")
    }

    if (page==="1") {
        return (
            <div className={"ThirdPartOrg org"}>
                <div className={"content_desc"}>W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
                <Page1/>
                <div className={"pages"}>
                    <div onClick={handleClickPage1} className={"page page1"}>1</div>
                    <div onClick={handleClickPage2} className={"page"}>2</div>
                </div>
            </div>
        )
    } else if (page==="2") {
        return (
            <div className={"ThirdPartOrg org"}>
                <div className={"content_desc"}>W naszej bazie znajdziesz listę zweryfikowanych Organizacji pozarządowych, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</div>
                <Page2/>
                <div className={"pages"}>
                    <div onClick={handleClickPage1} className={"page"}>1</div>
                    <div onClick={handleClickPage2} className={"page page2"}>2</div>
                </div>
            </div>
        )
    }
}