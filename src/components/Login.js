import React, {useState} from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if (localStorage.getItem('token')) {
        alert("Jesteś zalogowany")
        window.location.replace('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Email: ", email, "\nHasło: ", password)

        try {
            const response = await axios.post('http://localhost:3001/login',
                JSON.stringify({email, password}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer <token_here>'
                    },
                    withCredentials: true
                }
            );
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
            console.log(JSON.stringify(response.data));
            window.location.replace('/')
        } catch (error) {
            console.error("Error: " + error.message);
        }
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
export default Login;
