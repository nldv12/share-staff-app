import React, {useState} from "react";


export const Step1 = ({setItemTypes, setStep}) => {
    const [check1, setChceck1] = useState(false);
    const [check2, setChceck2] = useState(false);
    const [check3, setChceck3] = useState(false);
    const [check4, setChceck4] = useState(false);
    const [check5, setChceck5] = useState(false);

    let array = []
    const [err, setErr] = useState(false);

    const pushing = () => {

        if (typeof check1 === "string") {
            array.push(check1)
        }
        if (typeof check2 === "string") {
            array.push(check2)
        }
        if (typeof check3 === "string") {
            array.push(check3)
        }
        if (typeof check4 === "string") {
            array.push(check4)
        }
        if (typeof check5 === "string") {
            array.push(check5)
        }
    }

    const handleClick = () => {
        pushing()
        if (array.length < 1) {
            setErr("Musisz coś zaznaczyć")
        }else {
            setItemTypes(array)
            setStep("2")
        }
    }


    const checkMe1 = (e) => {
        if (e.target.checked) {
            setChceck1("ubrania, które nadają się do ponownego użycia")
            setErr(false)
        } else {
            setChceck1(false)
        }
    }
    const checkMe2 = (e) => {
        if (e.target.checked) {
            setChceck2("ubrania, do wyrzucenia")
            setErr(false)
        } else {
            setChceck2(false)
        }
    }
    const checkMe3 = (e) => {
        if (e.target.checked) {
            setChceck3("zabawki")
            setErr(false)
        } else {
            setChceck3(false)
        }
    }
    const checkMe4 = (e) => {
        if (e.target.checked) {
            setChceck4("książki")
            setErr(false)
        } else {
            setChceck4(false)
        }
    }
    const checkMe5 = (e) => {
        if (e.target.checked) {
            setChceck5("inne")
            setErr(false)
        } else {
            setChceck5(false)
        }
    }


    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć
                    komu najlepiej je przekazać.
                </div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 1/4</div>
                    <div className="title">Zaznacz co chcesz oddać:</div>
                    <div className="form_line">
                        <input onChange={checkMe1} type="checkbox" className="square"></input>
                        <div className="desc">ubrania, które nadają się do ponownego użycia</div>
                    </div>
                    <div className="form_line">
                        <input onChange={checkMe2} type="checkbox" className="square"></input>
                        <div className="desc">ubrania, do wyrzucenia</div>
                    </div>
                    <div className="form_line">
                        <input onChange={checkMe3} type="checkbox" className="square"></input>
                        <div className="desc">zabawki</div>
                    </div>
                    <div className="form_line">
                        <input onChange={checkMe4} type="checkbox" className="square"></input>
                        <div className="desc">książki</div>
                    </div>
                    <div className="form_line last1">
                        <input onChange={checkMe5} type="checkbox" className="square"></input>
                        <div className="desc desc_inne">inne</div>
                    </div>
                    <div className={"error"}>{err}</div>
                    <div className="buttonts">
                        <div onClick={handleClick} className="btn">Dalej</div>
                    </div>
                </div>

            </div>
        </div>

    )
}