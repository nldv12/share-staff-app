import React from "react";


export const Step1 = ({setStep}) => {

    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 1/4</div>
                    <div className="title">Zaznacz co chcesz oddać:</div>
                    <div className="form_line">
                        <input type="checkbox" className="square"></input>
                        <div className="desc">ubrania, które nadają się do ponownego użycia</div>
                    </div>
                    <div className="form_line">
                        <input type="checkbox" className="square"></input>
                        <div className="desc">ubrania, do wyrzucenia</div>
                    </div>
                    <div className="form_line">
                        <input type="checkbox" className="square"></input>
                        <div className="desc">zabawki</div>
                    </div>
                    <div className="form_line">
                        <input type="checkbox" className="square"></input>
                        <div className="desc">książki</div>
                    </div>
                    <div className="form_line last1">
                        <input type="checkbox" className="square"></input>
                        <div className="desc desc_inne">inne</div>
                    </div>
                    <div className="buttonts">
                        <div onClick={()=> setStep("2")} className="btn">Dalej</div>
                    </div>
                </div>

            </div>
        </div>

    )
}