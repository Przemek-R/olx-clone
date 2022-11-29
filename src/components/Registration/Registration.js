import React from 'react';
import './Registration.css';

function Registration() {
    return (
        <div className={"Registration"}>
            <form className={"RegistrationForm"}>
                <h4>REJESTRACJA</h4>
                <label>Imię</label>
                <input type={"text"} placeholder={"Wpisz swoje imię"}/>
                <label>Email</label>
                <input type={"text"} placeholder={"Wpisz swój email"}/>
                <label>Hasło</label>
                <input type={"password"} placeholder={"Podaj hasło"}/>
                <label>Zweryfikuj hasło</label>
                <input type={"password"} placeholder={"Podaj ponownie hasło"}/>
                <button>ZAREJESTRUJ SIĘ</button>
            </form>
        </div>
    );
}

export default Registration;
