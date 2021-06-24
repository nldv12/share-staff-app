import React from "react";


export const Step5 = ({setStep}) => {

    return (
        <div className={"step"}>

            <div className="form">
                <div className="container">
                    <div className="title">Podsumowanie Twojej darowizny</div>
                    <div className="small_title">Oddajesz:</div>

                    <div className="form_line">
                        <div className="picto"></div>
                        <div className="desc">4 worki, ubrania w dobrym stanie, dzieciom</div>
                    </div>
                    <div className="form_line">
                        <div className="picto2"></div>
                        <div className="desc">dla lokalizacji: Warszawa</div>
                    </div>
                    <div className="cont_in_cont">
                        <div className="form_line5">
                            <div className="small_title">Adres odbioru:</div>
                            <div>
                            <div className="col col1">
                                <div className="desc">Ulica</div>
                                <div className="desc">Miasto</div>
                                <div className="desc">Kod pocztowy</div>
                                <div className="desc">Numer telefonu</div>
                            </div>
                            <div className="col col2">
                                <div className="desc">Prosta 51</div>
                                <div className="desc">Warszawa</div>
                                <div className="desc">90-209</div>
                                <div className="desc">473 839 483</div>
                            </div>
                            </div>
                        </div>
                        <div className="form_line5">
                            <div className="small_title">Termin odbioru:</div>
                            <div>
                                <div className="col col1">
                                    <div className="desc">Data</div>
                                    <div className="desc">Godzina</div>
                                    <div className="desc">Uwagi dla kuriera</div>
                                </div>
                                <div className="col col2">
                                    <div className="desc">17.10.2019</div>
                                    <div className="desc">17:30</div>
                                    <div className="desc"> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonts">
                        <div onClick={()=> setStep("4")} className="btn">Wstecz</div>
                        <div onClick={()=> setStep("6")} className="btn">Potwierdzam</div>
                    </div>
                </div>

            </div>
        </div>

    )
}