import React from 'react';
import './Header.css';
import Logo from "../../olx-logo.svg";
import {FaMapMarkerAlt, FaSearch, FaUserCircle} from "react-icons/fa";

function Header() {
    return (
        <div className={"Header"}>
            <div className={"HeaderLeft"}>
                <img src={Logo} className={"Logo"}/>
            </div>
            <div className={"HeaderCenter"}>
                <FaSearch className={"Icon"}/>
                <input type={"text"} placeholder={"Szukaj"} className={"CenterSearch"}/>
                <FaMapMarkerAlt className={"Icon"}/>
                <input type={"text"} placeholder={"Lokalizacja"} className={"CenterLocalization"}/>
            </div>
            <div className={"HeaderRight"}>
                <button className={"HeaderRightSell"}>DODAJ OGŁOSZENIE</button>
                <h4 className={"HeaderRightLogin"}>Logowanie</h4>
                <FaUserCircle className={"User"}/>
            </div>
        </div>
    );
}

export default Header;
