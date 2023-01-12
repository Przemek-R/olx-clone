import React from 'react'

import '../styles/Messages.css'

export default function Messages() {
    return (
        <div className={"messages-container"}>
            <div className={"messages-menu"}>
                <h3 className={"messages-h3"}>Twoje wiadomości</h3>
                <ul className={"messages-list"}>
                    <li className={"messages-list-elem"}>
                        <a href="/ads" className={"messages-link"}>
                            <span className={"messages-text"}>Ogłoszenia</span>
                        </a>
                    </li>
                    <li className={"messages-list-elem"}>
                        <a href="/messages" className={"messages-link"}>
                            <span className={"messages-text"}>Wiadomości</span>
                        </a>
                    </li>
                    <li className={"messages-list-elem"}>
                        <a href="/settings" className={"messages-link"}>
                            <span className={"messages-text"}>Ustawienia</span>
                        </a>
                    </li>
                    <li className={"messages-list-elem"}>
                        <span className={"messages-text"}>Wyloguj</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
