import React, {useState, useEffect} from "react";
import {auth} from "../../firebase";
import "./SignUp.scss"
import {Link, useHistory} from "react-router-dom";


export const SignUp = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        setEmailErr,
        setPasswordErr,
        handleSignUp,
        emailErr,
        passwordErr,
        passwordRep,
        setPasswordRep,
        passwordRepErr,
        setPasswordRepErr
    } = props;

    const history = useHistory();

    const validation = (e) => {
        let isError = false

        if (email.length < 3) {
            setEmailErr("Email jest zbyt krótki")
            isError = true
        }else {
            setEmailErr(false)
        }
        if (!email.includes("@")) {
            setEmailErr("Podany email jest nieprawidłowy")
            isError = true
        }else {
            setEmailErr(false)
        }
        if (!email.includes(".")) {
            setEmailErr("Podany email jest nieprawidłowy")
            isError = true
        }else {
            setEmailErr(false)
        }
        if (password.length < 6) {
            setPasswordErr("Podane hasło jest zbyt krótkie")
            isError = true
        }else {
            setPasswordErr(false)
        }
        if (passwordRep === password) {
            setPasswordRepErr(false)
        } else {
            setPasswordRepErr("Hasła nie są takie same")
            isError = true
        }

        if (isError === false) {
            handleSignUp()
            // console.log("uzylem handla")
        }

    }

    return (
        <div className={"SignUp"}>
            <div className={"account_nav_container"}>
                <div className={"account"}>
                    <Link to="/Login" className={"account_el"}>Zaloguj</Link>
                    <Link to="/SignUp" className={"account_el"}>Załóż konto</Link>
                </div>
                <div className={"nav"}>
                    <Link to="/share-staff-app" className={"nav_el"}>Start</Link>
                    <Link to="/HomeSteps" className={"nav_el"}>O co chodzi?</Link>
                    <Link to="/HomeAboutUs" className={"nav_el"}>O nas</Link>
                    <Link to="/HomeWhoWeHelp" className={"nav_el"}>Fundacja i organizacje</Link>
                    <Link to="/HomeContact" className={"nav_el"}>Kontakt</Link>
                </div>
            </div>
            <div className={"SignUp_container"}>
                <div className={"title"}>Załóż konto</div>
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
                    <div className={"form_el"}>
                        <div className={"label"}>Powtórz hasło</div>
                        <input className={passwordRepErr ? "inputText error" : "inputText"}
                               type="password"
                               required
                               value={passwordRep}
                               onChange={e => setPasswordRep(e.target.value)}
                        />
                        <small>{passwordRepErr}</small>
                    </div>

                </div>
                <div className={"two_buttons"}>
                    <Link to="/Login" className={"btn"}>Zaloguj się</Link>
                    <div onClick={validation} className={"btn"}>Załóż konto</div>
                </div>

            </div>
        </div>

    )
}