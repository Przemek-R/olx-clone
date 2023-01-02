import React from 'react';
import '../styles/Registration.css';

class Registration extends React.Component {
    render() {
        return (
            <div className={"Registration"}>
                <form className={"RegistrationForm"}>
                    <h4 className={"RegistrationMain"}>REJESTRACJA</h4>
                    <label>Imię</label>
                    <input type={"text"} placeholder={"Wpisz swoje imię"}/>
                    <label>Nazwisko</label>
                    <input type={"text"} placeholder={"Wpisz swoje nazwisko"}/>
                    <label>Email</label>
                    <input type={"text"} placeholder={"Wpisz swój e-mail"}/>
                    <label>Hasło</label>
                    <input type={"password"} placeholder={"Wpisz hasło"}/>
                    <label>Powtórz hasło</label>
                    <input type={"password"} placeholder={"Wpisz ponownie hasło"}/>
                    <button className={"reg-button"}>ZAREJESTRUJ SIĘ</button>
                </form>
            </div>
        );
    }
}
export default Registration;
