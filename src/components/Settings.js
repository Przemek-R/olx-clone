import React from 'react';

import '../styles/Settings.css'

export default function Settings() {
    return (
        <div className={"settings-container"}>
            <div className={"settings-menu"}>
                <h3 className={"settings-h3"}>Ustawienia</h3>
                <ul className={"settings-list"}>
                    <li className={"settings-list-elem"}>
                        <a href="/ads" className={"settings-link"}>
                            <span className={"settings-text"}>Ogłoszenia</span>
                        </a>
                    </li>
                    <li className={"settings-list-elem"}>
                        <a href="/messages" className={"settings-link"}>
                            <span className={"settings-text"}>Wiadomości</span>
                        </a>
                    </li>
                    <li className={"settings-list-elem"}>
                        <a href="/settings" className={"settings-link"}>
                            <span className={"settings-text"}>Ustawienia</span>
                        </a>
                    </li>
                    <li className={"settings-list-elem"}>
                        <span className={"settings-text"}>Wyloguj</span>
                    </li>
                </ul>
            </div>
            <div className={"settings-data"}>
                <h4 className={"settings-h4"}>Zmień dane kontaktowe</h4>
                <text className={"settings-t"}>Kod lub miejscowość</text>
                <input className={"settings-input"} type={"text"}/>
                <text className={"settings-t"}>Osoba kontaktowa</text>
                <input className={"settings-input"} type={"text"}/>
                <text className={"settings-t"}>Numer telefonu</text>
                <input className={"settings-input"} type={"text"}/>
                <button className={"settings-button"}>Zapisz</button>
            </div>
            <div className={"settings-password"}>
                <h4 className={"settings-h4"}>Zmień hasło</h4>
                <text className={"settings-t"}>Obecne hasło</text>
                <input className={"settings-input"} type={"text"}/>
                <text className={"settings-t"}>Nowe hasło</text>
                <input className={"settings-input"} type={"text"}/>
                <button className={"settings-button"}>Zmień hasło</button>
            </div>
            <div className={"settings-email"}>
                <h4 className={"settings-h4"}>Zmień e-mail</h4>
                <text className={"settings-t"}>Nowy e-mail</text>
                <input className={"settings-input"} type={"text"}/>
                <button className={"settings-button"}>Zapisz</button>
            </div>
            <div className={"settings-space"}>
            </div>
        </div>
    );
}
