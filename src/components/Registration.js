import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Registration.css';
import bcrypt from 'bcryptjs';

export default function Registration() {
    const [username, setUsername] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)

    function validateForm() {

            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
                setError('Niepoprawny adres email');
                return false;
            }

            if (phone.length < 9 && phone.length > 12)
            {
                setError('Niepoprawny numer telefonu');
                return false;
            }

            if (password !== confirmPassword) {
                setError('Hasła nie są takie same');
                return false;
            }

            if (password.length < 8) {
                setError('Hasło musi mieć co najmniej 8 znaków');
                return false;
            }

            if (!/\d/.test(password)) {
                setError('Hasło musi zawierać co najmniej jedną cyfrę');
                return false;
            }

            if (!/[a-z]/.test(password)) {
                setError('Hasło musi zawierać co najmniej jedną małą literę');
                return false;
            }

            if (!/[A-Z]/.test(password)) {
                setError('Hasło musi zawierać co najmniej jedną dużą literę');
                return false;
            }

            if (!/[!@#$%^&*.]/.test(password)) {
                setError('Hasło musi zawierać co najmniej jeden znak specjalny');
                return false;

        }
        return true;
    }

        function handleSubmit(event) {
        event.preventDefault();

        const hashedPassword = bcrypt.hashSync(password)

        if (validateForm()){
            axios.post('http://localhost:3001/register', {
                username,
                surname,
                hashedPassword,
                email,
                phone
            })
                .then(response => {
                    alert("Zarejestrowano pomyślnie")
                    window.location.replace('/login')
                    console.log(response);
                })
                .catch(error => {
                    console.error("Błąd: " + error.message);
                });
        } else {
            console.error(error)
        }
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
                    placeholder={"Wpisz swój nr telefonu"}
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
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    placeholder={"Wpisz ponownie hasło"}
                    required
                />
                <button className={"reg-button"} type={"submit"}>ZAREJESTRUJ SIĘ</button>
            </form>
        </div>
    );
}
