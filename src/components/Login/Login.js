import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className={"Login"}>
            <form className={"LoginForm"}>
                <h4>LOGOWANIE</h4>
                <label>Email</label>
                <input type={"text"} placeholder={"Wpisz swój email"}/>
                <label>Hasło</label>
                <input type={"password"} placeholder={"Podaj hasło"}/>
                <button>ZALOGUJ SIĘ</button>
            </form>
        </div>
    );
}

export default Login;
