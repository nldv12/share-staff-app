import React, {useState, useEffect} from "react";
import {auth, db} from "../../firebase";
import "./Login.scss"
import {Link, useHistory} from "react-router-dom";


export const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        emailErr,
        setEmailErr,
        passwordErr,
        setPasswordErr
    } = props;

    const history = useHistory();

    const validation = (e) => {
        let ifError = false


        if (email.length < 3) {
            setEmailErr("Email jest zbyt krótki")
            ifError = true
        }else {
            setEmailErr(false)
        }
        if (!email.includes("@")) {
            setEmailErr("Podany email jest nieprawidłowy")
            ifError = true
        }else {
            setEmailErr(false)
        }
        if (!email.includes(".")) {
            setEmailErr("Podany email jest nieprawidłowy")
            ifError = true
        }else {
            setEmailErr(false)
        }
        if (password.length < 6) {
            setPasswordErr("Podane hasło jest zbyt krótkie")
            ifError = true
        }else {
            setPasswordErr(false)
        }


        if (ifError === false) {
            handleLogin()
            // console.log("Zalogowano")

        }

    }

    return (
        <div className={"Login"}>
            <div className={"account_nav_container"}>
                <div className={"account"}>
                    <Link to="/Login" className={"account_el"}>Zaloguj</Link>
                    <Link to="/SignUp" className={"account_el"}>Załóż konto</Link>
                </div>
                <div className={"nav"}>
                    <Link to="/share-staff-app" className={"nav_el"}>Start</Link>
                    <Link to="/share-staff-app" className={"nav_el"}>O co chodzi?</Link>
                    <Link to="/share-staff-app" className={"nav_el"}>O nas</Link>
                    <Link to="/share-staff-app" className={"nav_el"}>Fundacja i organizacje</Link>
                    <Link to="/share-staff-app" className={"nav_el"}>Kontakt</Link>
                </div>
            </div>
            <div className={"login_container"}>
                <div className={"title"}>Zaloguj się</div>
                <div className={"deco"}></div>
                <div className={"form_container"}>
                    <form className={"form_el"}>
                        <div className={"label"}>Email</div>
                        <input className={emailErr ? "inputText error" : "inputText"}
                               type="email"
                               name="email"
                               autoFocus
                               required
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                        />
                        <small>{emailErr}</small>

                    </form>
                    <div className={"form_el"}>
                        <div className={"label"}>Hasło</div>
                        <input className={passwordErr ? "inputText error" : "inputText"}
                               type="password"
                               required
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                        <small>{passwordErr}</small>
                    </div>

                </div>
                <div className={"two_buttons"}>
                    <Link to="/SignUp" className={"btn"}>Załóż konto</Link>
                    <div onClick={validation} className={"btn"}>Zaloguj się</div>
                </div>

            </div>

        </div>

    )
}