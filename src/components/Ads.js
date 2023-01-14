import React from 'react'

import '../styles/Ads.css'

const Ads = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.replace('/login')
    }

    return (
        <div className={"ads-container"}>
            <div className={"ads-menu"}>
                <h3 className={"ads-h3"}>Twoje ogłoszenia</h3>
                <ul className={"ads-list"}>
                    <li className={"ads-list-elem"}>
                        <a href="/ads" className={"ads-link"}>
                            <span className={"ads-text"}>Ogłoszenia</span>
                        </a>
                    </li>
                    <li className={"ads-list-elem"}>
                        <a href="/settings" className={"ads-link"}>
                            <span className={"ads-text"}>Ustawienia</span>
                        </a>
                    </li>
                    <li className={"ads-list-elem"}>
                        <button className={"ads-add-button-logout"} onClick={handleLogout}>Wyloguj</button>
                    </li>
                </ul>
            </div>
            <div className={"ads-add"}>
                <a href={"/add-advertisement"}>
                <button className={"ads-add-button"}>Dodaj ogłoszenie</button>
                </a>
            </div>
        </div>
    );
}
export default Ads;
