import React from 'react';
import Logo2 from "../img/olx-logo2.svg";
import {FaMapMarkerAlt, FaSearch, FaUserCircle} from 'react-icons/fa';

import '../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={"Header"}>
                <div className={"HeaderLeft"}>
                    <a href={"/"}>
                    <img src={Logo2} className={"Logo"}/>
                    </a>
                </div>
                <div className={"HeaderCenter"}>
                    <FaSearch className={"Icon"}/>
                    <input type={"text"} placeholder={"Szukaj"} className={"CenterSearch"}/>
                    <FaMapMarkerAlt className={"Icon"}/>
                    <input type={"text"} placeholder={"Lokalizacja"} className={"CenterLocalization"}/>
                </div>
                <div className={"HeaderRight"}>
                    <button className={"HeaderRightSell"}>DODAJ OGŁOSZENIE</button>
                    <a href={"/login"}>
                    <h4 className={"HeaderRightLogin"}>Logowanie</h4>
                    </a>
                    <a href={"/profile"}>
                    <FaUserCircle className={"User"}/>
                    </a>
                </div>
            </div>
        )
    }
}
export default Header;
