import logo from './logo.svg';
import React, {useState, useEffect, } from "react";
import './App.css';
import {Route, Switch, useHistory} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {HomeAboutUs} from "./components/Home/HomeAboutUs/HomeAboutUs";
import {HomeContact} from "./components/Home/HomeContact/HomeContact";
import {HomeSteps} from "./components/Home/HomeSteps/HomeSteps";
import {HomeWhoWeHelp} from "./components/Home/HomeWhoWeHelp/HomeWhoWeHelp";
import {Home as HomeLoged} from "./components/HomeLogged/Home";
import {Login} from "./components/Login/Login";
import {Menu} from "./components/Menu/Menu";
import {OddajRzeczy} from "./components/OddajRzeczy/OddajRzeczy";
import {SignUp} from "./components/SignUp/SignUp";
import {LogOut} from "./components/LogOut/LogOut";
import {auth} from "./firebase";

// import {AuthProvider} from "./contexts/AuthContext";

function App() {
    const history = useHistory();

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [passwordRep, setPasswordRep] = useState("");
    const [passwordRepErr, setPasswordRepErr] = useState("");
    // const [ifError, setifError] = useState(false);


    const clearInputs = () => {
        setEmail("")
        setPassword("")
        setPasswordRep("")
    }
    const clearErrors = () => {
        setEmailErr("")
        setPasswordErr("")
        // setPasswordRepErr("")
    }


    const handleLogin = () => {
        clearErrors();
        auth.signInWithEmailAndPassword(email, password)
            .then(e => {
                history.push("/user")
            })
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                        setEmailErr("Podany email jest nieprawidłowy");
                        break;
                    case "auth/user-disabled":
                        setEmailErr("Urzytkownik zablokowany");
                        break;
                    case "auth/user-not-found":
                        setEmailErr("Taki urzytkownik nie istnieje");
                        break;
                    case "auth/wrong-password":
                        setPasswordErr("Hasło jest nie poprawne");
                        break;
                }
            })
    }

    const handleSignUp = () => {

        clearErrors();
        auth.createUserWithEmailAndPassword(email, password)
            .then(e => {
                history.push("/user")
            })
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setEmailErr("Podany email jest zajęty");
                        break;
                    case "auth/invalid-email":
                        setEmailErr("Podany email jest nieprawidłowy");
                        break;
                    case "auth/weak-password":
                        setPasswordErr("Podane hasło jest za krótkie");
                        break;
                }
            })

    }

    const handleLogOut = () => {
        auth.signOut();
        history.push("/LogOut")
    }


    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
                clearInputs()
                setUser(user)

            } else {
                setUser("")
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);


    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route path="/share-staff-app" exact component={Home}/>
                <Route path="/HomeAboutUs" exact component={HomeAboutUs}/>
                <Route path="/HomeContact" exact component={HomeContact}/>
                <Route path="/HomeSteps" exact component={HomeSteps}/>
                <Route path="/HomeWhoWeHelp" exact component={HomeWhoWeHelp}/>
                <Route exact path="/user">
                    <HomeLoged user={user} handleLogOut={handleLogOut} />
                </Route>
                <Route exact path="/Login">
                    <Login
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        emailErr={emailErr}
                        setEmailErr={setEmailErr}
                        passwordErr={passwordErr}
                        setPasswordErr={setPasswordErr}
                    />
                </Route>
                <Route exact path="/SignUp">
                    <SignUp
                        email={email}
                        setEmail={setEmail}
                        setEmailErr={setEmailErr}
                        password={password}
                        setPassword={setPassword}
                        setPasswordErr={setPasswordErr}
                        handleSignUp={handleSignUp}
                        emailErr={emailErr}
                        passwordErr={passwordErr}
                        passwordRep={passwordRep}
                        setPasswordRep={setPasswordRep}
                        passwordRepErr={passwordRepErr}
                        setPasswordRepErr={setPasswordRepErr}
                    />
                </Route>
                <Route path="/LogOut" exact component={LogOut}/>
                <Route exact path="/OddajRzeczy">
                    <OddajRzeczy user={user} handleLogOut={handleLogOut} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
