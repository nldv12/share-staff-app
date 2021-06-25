import React, {useState} from "react";


export const Step2 = ({setNrOfBags, setStep}) => {
    const [myBags, setMyBags] = useState(1);



    const handleClick = () => {
        setNrOfBags(myBags)
        setStep("3")
    }





    return (
        <div className={"step"}>
            <div className="yellow_guy">
                <div className="title">Ważne!</div>
                <div className="title_desc">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="step_count">Krok 2/4</div>
                    <div className="title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</div>
                    <div className="form_line2">
                        <div className="desc">Liczba 60l worków:</div>
                        <select onChange={(e) => setMyBags(e.target.value)} className={"inputSelect"} name="name">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="buttonts">
                        <div onClick={()=> setStep("1")} className="btn">Wstecz</div>
                        <div onClick={handleClick} className="btn">Dalej</div>
                    </div>

                </div>

            </div>
        </div>

    )
}