import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className={"Login"}>
                <form id={"LoginForm"} className={"LoginForm"}>
                    <h4 className={"LoginMain"}>LOGOWANIE</h4>
                    <label>Email</label>
                    <input type={"text"} placeholder={"Wpisz swój email"} required/>
                    <label>Hasło</label>
                    <input type={"password"} placeholder={"Wpisz hasło"} required/>
                    <button className={"log-button"}>ZALOGUJ SIĘ</button>
                    <text>Nie masz jeszcze konta? <a href={"/registration"}>Zarejestruj się</a></text>
                </form>
            </div>
        );
    }
}
export default Login;
