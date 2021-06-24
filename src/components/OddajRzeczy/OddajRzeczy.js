import React, {useState, useEffect} from "react";
import "./OddajRzeczy.scss"
import {OddajHeader} from "./OddajHeader/OddajHeader";
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";
import {Step4} from "./Step4";
import {Step5} from "./Step5";
import {Step6} from "./Step6";
import {HomeContact} from "../HomeLogged/HomeContact/HomeContact";



export const OddajRzeczy = ({user, handleLogOut}) => {
    const [step, setStep] = useState("1");





    return (
        <div className={"OddajRzeczy"}>
            <OddajHeader user={user} handleLogOut={handleLogOut}/>
            {step === "1" && <Step1 setStep={setStep}/>}
            {step === "2" && <Step2 setStep={setStep}/>}
            {step === "3" && <Step3 setStep={setStep}/>}
            {step === "4" && <Step4 setStep={setStep}/>}
            {step === "5" && <Step5 setStep={setStep}/>}
            {step === "6" && <Step6/>}
            <HomeContact user={user}/>

        </div>

    )
}