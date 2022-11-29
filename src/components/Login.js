import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className={"Login"}>
                <form className={"LoginForm"}>
                    <h4 className={"LoginMain"}>LOGOWANIE</h4>
                    <label>Email</label>
                    <input type={"text"} placeholder={"Wpisz swój email"}/>
                    <label>Hasło</label>
                    <input type={"password"} placeholder={"Podaj hasło"}/>
                    <button>ZALOGUJ SIĘ</button>
                </form>
            </div>
        );
    }
}
export default Login;
