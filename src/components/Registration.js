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

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('olx-clone-api/register', {
            username,
            surname,
            email,
            phone,
            password
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error("Błąd: " + error.message);
            });
    }
    return (
        <div className={"Registration"}>
            <form onSubmit={handleSubmit} className={"RegistrationForm"}>
                <h4 className={"RegistrationMain"}>REJESTRACJA</h4>
                <label>Imię</label>
                <input
                    type={"text"}
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder={"Wpisz swoje imię"}
                    required
                />
                <label>Nazwisko</label>
                <input
                    type={"text"}
                    value={surname}
                    onChange={event => setSurname(event.target.value)}
                    placeholder={"Wpisz swoje nazwisko"}
                    required
                />
                <label>Email</label>
                <input
                    type={"text"}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder={"Wpisz swój e-mail"}
                    required
                />
                <label>Telefon</label>
                <input
                    type={"numeric"}
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    placeholder={"Wpisz swój nr. telefonu"}
                    required
                />
                <label>Hasło</label>
                <input
                    type={"password"}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder={"Wpisz hasło"}
                    required
                />
                <label>Powtórz hasło</label>
                <input
                    type={"password"}
                    value={password2}
                    onChange={event => setPassword2(event.target.value)}
                    placeholder={"Wpisz ponownie hasło"}
                    required
                />
                <button className={"reg-button"} type={"submit"}>ZAREJESTRUJ SIĘ</button>
            </form>
        </div>
    );
}

// function newUser(username, surname, email, phone, password) {
//     console.log("Tworzenie konta: " + email)
//
//     axios.post(`http://localhost:3001/models/register`, {
//         "username": username,
//         "surname": surname,
//         "email": email,
//         "phone": phone,
//         "password": password
//     }).then(() => {
//         alert("Rejestracja przebiegła pomyślnie")
//     }).catch((err) => {
//         console.log('Error:' + err.message)
//         alert("Nieprawidłowe dane")
//     })
// }
