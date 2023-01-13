import React from 'react'

import '../styles/Ads.css'

export default function Ads(){
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
                       <span className={"ads-text"}>Wyloguj</span>
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
