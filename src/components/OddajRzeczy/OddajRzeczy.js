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



    const [itemTypes, setItemTypes] = useState(false);
    const [nrOfBags, setNrOfBags] = useState(false);
    const [city, setCity] = useState(false);
    const [whoWeHelp, setWhoWeHelp] = useState(false);
    const [nameOfOrg, setNameOfOrg] = useState(false);
    const [street, setStreet] = useState(false);
    const [reciveCity, setReciveCity] = useState(false);
    const [postalCode, setPostalCode] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);
    const [reciveDate, setReciveDate] = useState(false);
    const [reciveTime, setReciveTime] = useState(false);
    const [deliveryNotice, setDeliveryNotice] = useState(false);

    let formCompleted = {
        itemTypes: itemTypes,
        nrOfBags: nrOfBags,
        city: city,
        whoWeHelp: whoWeHelp,
        nameOfOrg: nameOfOrg,
        street: street,
        reciveCity: reciveCity,
        postalCode: postalCode,
        phoneNumber: phoneNumber,
        reciveDate: reciveDate,
        reciveTime: reciveTime,
        deliveryNotice: deliveryNotice,
    }


    console.log(itemTypes)
    console.log(nrOfBags)
    console.log(city)
    console.log(whoWeHelp)
    console.log(nameOfOrg)
    console.log(street)
    console.log(reciveCity)
    console.log(postalCode)
    console.log(phoneNumber)
    console.log(reciveDate)
    console.log(reciveTime)
    console.log(deliveryNotice)


    return (
        <div className={"OddajRzeczy"}>
            <OddajHeader user={user} handleLogOut={handleLogOut}/>
            {step === "1" && <Step1 setItemTypes={setItemTypes} setStep={setStep}/>}
            {step === "2" && <Step2 setNrOfBags={setNrOfBags} setStep={setStep}/>}
            {step === "3" &&
            <Step3 setNameOfOrg={setNameOfOrg} setWhoWeHelp={setWhoWeHelp} setCity={setCity} setStep={setStep}/>}
            {step === "4" &&
            <Step4 setDeliveryNotice={setDeliveryNotice} setReciveTime={setReciveTime} setReciveDate={setReciveDate}
                   setPhoneNumber={setPhoneNumber} setPostalCode={setPostalCode} setReciveCity={setReciveCity}
                   setStreet={setStreet}
                   setStep={setStep}
            />}
            {step === "5" && <Step5 formCompleted={formCompleted} setStep={setStep}/>}
            {step === "6" && <Step6/>}
            <HomeContact user={user}/>

        </div>

    )
}