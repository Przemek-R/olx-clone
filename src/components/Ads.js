import React from 'react';

import '../styles/Ads.css'

class Ads extends React.Component {
    render() {
        return (
            <div className={"ads-container"}>
                <div className={"ads-menu"}>
                    <h3 className={"ads-h3"}>Twoje ogłoszenia</h3>
                </div>
                <div className={"ads-menu-2"}>
                        <ul className={"ads-list"}>
                            <li className={"ads-list-elem"}>
                                <a href="" className={"ads-link"}>
                                    <span className={"ads-text"}>Aktywne</span>
                                </a>
                            </li>
                            <li className={"ads-list-elem"}>
                                <a href="" className={"ads-link"}>
                                    <span className={"ads-text"}>Oczekujące</span>
                                </a>
                            </li>
                            <li className={"ads-list-elem"}>
                                <a href="" className={"ads-link"}>
                                    <span className={"ads-text"}>Zakończone</span>
                                </a>
                            </li>
                            <li className={"ads-list-elem"}>
                                <a href="" className={"ads-link"}>
                                    <span className={"ads-text"}>Wstrzymane</span>
                                </a>
                            </li>
                        </ul>
                </div>
                <div className={"ads-add-menu"}>
                    <button className={"ads-add"}>Dodaj ogłoszenie</button>
                </div>
            </div>
        );
    }
}export default Ads;
