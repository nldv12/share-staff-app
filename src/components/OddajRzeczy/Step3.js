import React from "react";


export const Step3 = ({setStep}) => {

    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 3/4</div>
                    <div className="title">Lokalizacja:</div>
                    <select className="inputSelect" >
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </select>
                    <div className="small_title">Komu chcesz pomóc?</div>
                    <div className="form_line3">
                        <div className="square2">dzieciom</div>
                        <div className="square2">samotnym matkom</div>
                        <div className="square2">bezdomnym</div>
                    </div>
                    <div className="form_line3">
                        <div className="square2">niepełnosprawnym</div>
                        <div className="square2">osobom starszym</div>
                    </div>
                    <div className="small_title">Wpisz nazwę konkretnej organizacji (opcjonalnie)</div>
                    <input className="inputText_long" type="text" />
                    <div className="buttonts">
                        <div onClick={()=> setStep("2")} className="btn">Wstecz</div>
                        <div onClick={()=> setStep("4")} className="btn">Dalej</div>
                    </div>
                </div>

            </div>
        </div>

    )
}