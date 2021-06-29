import React from "react";
import {db} from "../../firebase";


export const Step5 = ({formCompleted, setStep}) => {

    const handleClick = () => {
        db.collection(`ShareStafForm`)
            .add({
                itemTypes: formCompleted.itemTypes,
                nrOfBags: formCompleted.nrOfBags,
                city: formCompleted.city,
                whoWeHelp: formCompleted.whoWeHelp,
                nameOfOrg: formCompleted.nameOfOrg,
                street: formCompleted.street,
                reciveCity: formCompleted.reciveCity,
                postalCode: formCompleted.postalCode,
                phoneNumber: formCompleted.phoneNumber,
                reciveDate: formCompleted.reciveDate,
                reciveTime: formCompleted.reciveTime,
                deliveryNotice: formCompleted.deliveryNotice,
            })


        setStep("6")
    }



    return (
        <div className={"step"}>

            <div className="form back5">
                <div className="container">
                    <div className="title">Podsumowanie Twojej darowizny</div>
                    <div className="small_title">Oddajesz:</div>

                    <div className="form_line form_line6">
                        <div className="picto"></div>
                        <div className="desc">
                            <div className="bags">
                                <div> {formCompleted.nrOfBags} {formCompleted.nrOfBags>1 ? "Worki": "Worek"} </div>
                                <div>{formCompleted.whoWeHelp.map(e => <div>{e}</div>)}</div>

                            </div>
                            <div className="staff">{formCompleted.itemTypes.map(e => <div>{e}</div>)}</div>
                        </div>
                    </div>
                    <div className="form_line">
                        <div className="picto2"></div>
                        <div className="desc">dla lokalizacji: {formCompleted.city}</div>
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
                                    <div className="desc">{formCompleted.street}</div>
                                    <div className="desc">{formCompleted.reciveCity}</div>
                                    <div className="desc">{formCompleted.postalCode}</div>
                                    <div className="desc">{formCompleted.phoneNumber}</div>
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
                                    <div className="desc">{formCompleted.reciveDate}</div>
                                    <div className="desc">{formCompleted.reciveTime}</div>
                                    <div className="desc delivery">{formCompleted.deliveryNotice} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonts">
                        <div onClick={() => setStep("4")} className="btn">Wstecz</div>
                        <div onClick={handleClick} className="btn">Potwierdzam</div>
                    </div>
                </div>

            </div>
        </div>

    )
}