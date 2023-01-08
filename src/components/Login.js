import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();
        await axios.post('http://localhost:3001/login', {
            email,
            password
        })
            .then(response => {
                if (response.data.success) {
                    window.location.replace('/');
                }
            })
            .catch(error => {
                console.error("Błąd: " + error.message);
            });
    }

    return (
        <div className={"Login"}>
            <form onSubmit={handleSubmit} className={"LoginForm"}>
                <h4 className={"LoginMain"}>LOGOWANIE</h4>
                <label>Email</label>
                <input
                    type={"text"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={"Wpisz swój email"}
                    required
                />
                <label>Hasło</label>
                <input
                    type={"password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder={"Wpisz hasło"}
                    required
                />
                <button className={"log-button"}>ZALOGUJ SIĘ</button>
                <text>Nie masz jeszcze konta? <a href={"/registration"}>Zarejestruj się</a></text>
            </form>
        </div>
    );
}
