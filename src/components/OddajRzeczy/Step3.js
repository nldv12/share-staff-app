import React, {useState} from "react";


export const Step3 = ({setNameOfOrg, setWhoWeHelp, setCity, setStep}) => {
    const [myCity, setMyCity] = useState("Poznań");

    const [changeColor1, setChangeColor1] = useState(false);
    const [changeColor2, setChangeColor2] = useState(false);
    const [changeColor3, setChangeColor3] = useState(false);
    const [changeColor4, setChangeColor4] = useState(false);
    const [changeColor5, setChangeColor5] = useState(false);


    const [myOrgName, setMyOrgName] = useState(false);
    if (myOrgName.length<2) {
        setMyOrgName(false)
    }

    let array = []
    const [err, setErr] = useState(false);


    const arradd = () => {
        if (changeColor1) {
            array.push("dzieciom")
        }
        if (changeColor2) {
            array.push("samotnym matkom")
        }
        if (changeColor3) {
            array.push("bezdomnym")
        }
        if (changeColor4) {
            array.push("niepełnosprawnym")
        }
        if (changeColor5) {
            array.push("osobom starszym")
        }
    }

    const handleClick = () => {
        arradd()
        setCity(myCity)
        if (array.length < 1) {
            setErr("Musisz coś zaznaczyć")
        } else {
            setErr(false)
            setWhoWeHelp(array)
            setNameOfOrg(myOrgName)
            setStep("4")
        }
    }


    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w
                    wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
                </div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 3/4</div>
                    <div className="title">Lokalizacja:</div>
                    <select onChange={(e) => setMyCity(e.target.value)} className="inputSelect">
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                    <div className="small_title step3">Komu chcesz pomóc?</div>
                    <div className="form_line3">
                        <div onClick={() => {
                            setChangeColor1(!changeColor1)
                            setErr(true)
                        }} className={changeColor1 ? "square2 selected" : "square2"}>dzieciom
                        </div>
                        <div onClick={() => {
                            setChangeColor2(!changeColor2)
                            setErr(true)
                        }} className={changeColor2 ? "square2 selected" : "square2"}>samotnym matkom
                        </div>
                        <div onClick={() => {
                            setChangeColor3(!changeColor3)
                            setErr(true)
                        }} className={changeColor3 ? "square2 selected" : "square2"}>bezdomnym
                        </div>
                    </div>
                    <div className="form_line3">
                        <div onClick={() => {
                            setChangeColor4(!changeColor4)
                            setErr(true)
                        }} className={changeColor4 ? "square2 selected" : "square2"}>niepełnosprawnym
                        </div>
                        <div onClick={() => {
                            setChangeColor5(!changeColor5)
                            setErr(true)
                        }} className={changeColor5 ? "square2 selected" : "square2"}>osobom starszym
                        </div>
                    </div>
                    <div className={"error"}>{err}</div>
                    <div className="small_title step3">Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
                    <input onChange={e => setMyOrgName(e.target.value)} className="inputText_long" type="text"/>
                    <div className="buttonts">
                        <div onClick={() => setStep("2")} className="btn">Wstecz</div>
                        <div onClick={handleClick} className="btn">Dalej</div>
                    </div>
                </div>

            </div>
        </div>

    )
}