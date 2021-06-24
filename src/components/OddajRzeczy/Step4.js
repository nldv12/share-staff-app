import React from "react";


export const Step4 = ({setStep}) => {

    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Podaj adres oraz termin odbioru rzeczy.</div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 4/4</div>
                    <div className="title">Podaj adres oraz termin odbioru rzecz przez kuriera</div>

                    <div className="cont_in_cont last4">
                        <div className="form_line4">
                            <div className="small_title">Adres odbioru:</div>
                            <div className="form_line4_row">
                                <div className="desc">Ulica</div>
                                <input className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Miasto</div>
                                <input className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Kod pocztowy</div>
                                <input className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Numer telefonu</div>
                                <input className="inputText" type="text"/>
                            </div>
                        </div>
                        <div className="form_line4">
                            <div className="small_title">Termin odbioru:</div>
                            <div className="form_line4_row">
                                <div className="desc">Data</div>
                                <input className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Godzina</div>
                                <input className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Uwagi dla kuriera</div>
                                <textarea className="inputText_high" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="buttonts">
                        <div onClick={()=> setStep("3")} className="btn">Wstecz</div>
                        <div onClick={()=> setStep("5")} className="btn">Dalej</div>
                    </div>

                </div>

            </div>
        </div>

    )
}