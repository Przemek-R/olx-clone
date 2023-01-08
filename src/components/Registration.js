import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registration.css';

export default function Registration() {
    const [username, setUsername] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    return (
        <div className={"Registration"}>
            <form id={"RegistrationForm"} className={"RegistrationForm"}>
                <h4 className={"RegistrationMain"}>REJESTRACJA</h4>
                <label>Imię</label>
                <input
                    type={"text"}
                    name={"username"}
                    onChange={setUsername}
                    placeholder={"Wpisz swoje imię"}
                    required
                />
                <label>Nazwisko</label>
                <input
                    type={"text"}
                    name={"surname"}
                    onChange={setSurname}
                    placeholder={"Wpisz swoje nazwisko"}
                    required
                />
                <label>Email</label>
                <input
                    type={"text"}
                    name={"email"}
                    onChange={setEmail}
                    placeholder={"Wpisz swój e-mail"}
                    required
                />
                <label>Telefon</label>
                <input
                    type={"numeric"}
                    name={"phone"}
                    onChange={setPhone}
                    placeholder={"Wpisz swój nr. telefonu"}
                    required
                />
                <label>Hasło</label>
                <input
                    type={"password"}
                    name={"password"}
                    onChange={setPassword}
                    placeholder={"Wpisz hasło"}
                    required
                />
                <label>Powtórz hasło</label>
                <input
                    type={"password"}
                    name={"password2"}
                    onChange={setPassword2}
                    placeholder={"Wpisz ponownie hasło"}
                    required
                />
                <button onClick={() => newUser(username, surname, email, phone, password)} className={"reg-button"} type={"submit"}>ZAREJESTRUJ SIĘ</button>
            </form>
        </div>
    );
}

function newUser(username, surname, email, phone, password) {
    console.log("Tworzenie konta: " + email)

    axios.post(`http://localhost:3001/models/register`, {
        "username": username,
        "surname": surname,
        "email": email,
        "phone": phone,
        "password": password
    }).then(() => {
        alert("Rejestracja przebiegła pomyślnie")
    }).catch((err) => {
        console.log('Error:' + err.message)
        alert("Nieprawidłowe dane")
    })
}
