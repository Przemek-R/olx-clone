import React from 'react';
import '../styles/Registration.css';
import axios from 'axios';

export default function Registration() {
    return (
        <div className={"Registration"}>
            <form id={"RegistrationForm"} className={"RegistrationForm"}>
                <h4 className={"RegistrationMain"}>REJESTRACJA</h4>
                <label for={"username"}>Imię</label>
                <input type={"text"} id={"username"} name={"username"} placeholder={"Wpisz swoje imię"} required/>
                <label for={"surname"}>Nazwisko</label>
                <input type={"text"} id={"surname"} name={"surname"} placeholder={"Wpisz swoje nazwisko"} required/>
                <label for={"email"}>Email</label>
                <input type={"text"} id={"email"} name={"email"} placeholder={"Wpisz swój e-mail"} required/>
                <label for={"phone"}>Telefon</label>
                <input type={"numeric"} id={"phone"} name={"phone"} placeholder={"Wpisz swój nr. telefonu"} required/>
                <label for={"password"}>Hasło</label>
                <input type={"password"} id={"password"} name={"password"} placeholder={"Wpisz hasło"} required/>
                <label>Powtórz hasło</label>
                <input type={"password"} id={"password2"} name={"password2"} placeholder={"Wpisz ponownie hasło"} required/>
                <button className={"reg-button"} type={"submit"}>ZAREJESTRUJ SIĘ</button>
            </form>
        </div>
    );
}

const form = document.getElementById('RegistrationForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const username = formData.get('username');
    const surname = formData.get('surname');
    const password = formData.get('password');
    const email = formData.get('email');
    const phone = formData.get('phone');

    axios.post('/olx-clone-api/models/register', {username, surname, password, email, phone})
        .then((res) => {
        })
        .catch((err) => {
            console.error(err);
            alert('Błąd podczas próby rejestracji');
        });
});
