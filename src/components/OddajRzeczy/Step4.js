import React, {useState} from "react";


export const Step4 = (props) => {
    const {
        setDeliveryNotice,
        setReciveTime,
        setReciveDate,
        setPhoneNumber,
        setPostalCode,
        setReciveCity,
        setStreet,
        setStep
    } = props;

    const [streetMy, setStreetMy] = useState("");
    const [reciveCityMy, setReciveCityMy] = useState("");
    const [postalCodeMy, setPostalCodeMy] = useState("");
    const [phoneNumberMy, setPhoneNumberMy] = useState("");
    const [reciveDateMy, setReciveDateMy] = useState("");
    const [reciveTimeMy, setReciveTimeMy] = useState("");
    const [deliveryNoticeMy, setDeliveryNoticeMy] = useState(false);



let ifError = false

    const [err, setErr] = useState(false);

    const validation = () => {

        if (streetMy.length<2 || reciveCityMy.length<2 ||  postalCodeMy.length<2 || reciveDateMy.length<2 || reciveTimeMy.length<2) {
            setErr("Musisz wypełnić wszystkie pola oprócz: Uwagi dla kuriera")
            ifError = true
        }else if (phoneNumberMy.length<9) {
            setErr("Numer telefonu musi być prawidłowy")
            ifError = true
        }else {
            setErr(false)
        }
    }

    const handleClick = () => {
        validation()
        // setStep("5")
        if (ifError === false) {
            setDeliveryNotice(deliveryNoticeMy)
            setReciveTime(reciveTimeMy)
            setReciveDate(reciveDateMy)
            setPhoneNumber(phoneNumberMy)
            setPostalCode(postalCodeMy)
            setReciveCity(reciveCityMy)
            setStreet(streetMy)
            setStep("5")
        } else {
            console.log("panie problem mamy")
        }
    }


    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Podaj adres oraz termin odbioru rzeczy.</div>
            </div>
            <div className="form back4">
                <div className="container">
                    <div className="step_count">Krok 4/4</div>
                    <div className="title">Podaj adres oraz termin odbioru rzecz przez kuriera</div>

                    <div className="cont_in_cont last4">
                        <div className="form_line4">
                            <div className="small_title step3">Adres odbioru:</div>
                            <div className="form_line4_row">
                                <div className="desc">Ulica</div>
                                <input onChange={e => setStreetMy(e.target.value)} className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Miasto</div>
                                <input onChange={e => setReciveCityMy(e.target.value)} className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Kod pocztowy</div>
                                <input onChange={e => setPostalCodeMy(e.target.value)} className="inputText" type="text"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Numer telefonu</div>
                                <input onChange={e => setPhoneNumberMy(e.target.value)} className="inputText"
                                       type="number"/>
                            </div>
                        </div>
                        <div className="form_line4">
                            <div className="small_title step3">Termin odbioru:</div>
                            <div className="form_line4_row">
                                <div className="desc">Data</div>
                                <input onChange={e => setReciveDateMy(e.target.value)} className="inputText" type="date"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Godzina</div>
                                <input onChange={e => setReciveTimeMy(e.target.value)} className="inputText" type="time"/>
                            </div>
                            <div className="form_line4_row">
                                <div className="desc">Uwagi dla kuriera</div>
                                <textarea onChange={e => setDeliveryNoticeMy(e.target.value)} className="inputText_high"/>
                            </div>
                        </div>

                    </div>
                    <div className={"error"}>{err}</div>
                    <div className="buttonts">
                        <div onClick={() => setStep("3")} className="btn">Wstecz</div>
                        <div onClick={handleClick} className="btn">Dalej</div>
                    </div>

                </div>

            </div>
        </div>

    )
}