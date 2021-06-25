import React, {useState} from "react";
import {db} from "../../../firebase";
import "./HomeContact.scss"


export const HomeContact = ({user}) => {


    const clearInputs = () => {
        // setEmail("")
        setName("")
        setMessage("")
    }

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [message, setMessage] = useState("");
    const [messageErr, setMessageErr] = useState("");


    const validation = (e) => {
        let ifError = false

        if (name.indexOf(' ') >= 0) {
            setNameErr("Imię nie może zawierać spacji")
            ifError = true
        } else {
            setNameErr(false)
        }
        // if (name.length < 3) {
        //     setNameErr("Podane imię jest zbyt krótkie")
        //     ifError = true
        // } else {
        //     setNameErr(false)
        // }

        if (message.length < 120) {
            setMessageErr("Wiadomość jest zbyt krótka (min 120 znaków)")
            ifError = true
        } else {
            setMessageErr(false)
        }

        // if (email.length < 3 || !email.includes("@") || !email.includes(".")) {
        //     setEmailErr("Podany email jest nieprawidłowy")
        //     ifError = true
        // } else {
        //     setEmailErr(false)
        // }


        if (ifError === false) {

            db.collection(`Contact`)
                .add({
                    name: name,
                    email: user.email,
                    message: message
                })
            clearInputs()
            window.confirm("Twoja wiadomość została wysłana");
        }
    }

    return (
        <div className={"HomeContact"}>
            <div className={"background"}>
            </div>
            <div className={"content"}>
                <div className={"title"}>Skontaktuj się z nami</div>
                <div className={"deco"}></div>
                <div className={"inputs_row"}>
                    <div className={"input"}>
                        <div className={"label"}>Wpisz swoje imię</div>
                        <input value={name} onChange={e => setName(e.target.value)}
                               className={nameErr ? "inputText error" : "inputText"} type="text"
                               placeholder={"Krzysztof"} name={"name"}/>
                        <small>{nameErr}</small>
                    </div>
                    <div className={"input"}>
                        <div className={"label"}>Wpisz swój email</div>
                        <input onChange={e => setEmail(e.target.value)}
                               className={emailErr ? "inputText error" : "inputText"} type="email" placeholder={"krzysztof@mail.com"} name={"email"}/>
                        <small>{emailErr}</small>
                    </div>
                </div>
                <div className={"input textarea"}>
                    <div className={"label"}>Wpisz swoją wiadomość</div>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className={messageErr ? "error" : ""}
                              placeholder={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}>
                </textarea>
                    <small>{messageErr}</small>

                </div>
                <button onClick={validation}>Wyślij</button>

            </div>
        </div>

    )
}