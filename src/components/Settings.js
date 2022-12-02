import React from 'react';

import '../styles/Settings.css'

class Settings extends React.Component {
    render() {
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
            </div>
        );
    }
}export default Settings;
