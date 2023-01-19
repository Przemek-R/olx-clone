import React, {useState} from 'react';
import {FaMapMarkerAlt, FaSearch, FaUserCircle} from 'react-icons/fa';
import '../styles/Header.css';
import Logo2 from '../img/olx-logo2.svg';

const Header = () => {
    const [searchWord, setSearchWord] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        window.location.href = `/results?word=${searchWord}`;
    }

    return (
        <div className={"Header"}>
            <div className={"HeaderLeft"}>
                <a href={"/"}>
                    <img src={Logo2} className={"Logo"}/>
                </a>
            </div>
            <div className={"HeaderCenter"}>
                <form onSubmit={handleSearch} className={"HeaderCenter-form"}>
                    <button className={"header-button"} type={"submit"}>
                        <FaSearch className={"Icon"}/>
                    </button>
                    <input type={"text"} placeholder={"Szukaj..."} className={"CenterSearch"} value={searchWord}
                           onChange={(e) => setSearchWord(e.target.value)}/>
                </form>
                <FaMapMarkerAlt className={"Icon"}/>
                <input list={"localization"} type={"text"} placeholder={"Lokalizacja"}
                       className={"CenterLocalization"}/>
                <datalist id={"localization"}>
                    <option value={"Cała Polska"}></option>
                    <option value={"Dolnośląskie"}></option>
                    <option value={"Kujawsko-pomorskie"}></option>
                    <option value={"Lubelskie"}></option>
                    <option value={"Lubuskie"}></option>
                    <option value={"Łódzkie"}></option>
                    <option value={"Małopolskie"}></option>
                    <option value={"Mazowieckie"}></option>
                    <option value={"Opolskie"}></option>
                    <option value={"Podkarpackie"}></option>
                    <option value={"Podlaskie"}></option>
                    <option value={"Pomorskie"}></option>
                    <option value={"Śląskie"}></option>
                    <option value={"Świętokrzyskie"}></option>
                    <option value={"Warmińsko-mazurskie"}></option>
                    <option value={"Wielkopolskie"}></option>
                    <option value={"Zachodniopomorskie"}></option>
                </datalist>
            </div>
            <div className={"HeaderRight"}>
                <a href={"/add-advertisement"}>
                    <button className={"HeaderRightSell"}>Dodaj ogłoszenie</button>
                </a>
                <a href={"/login"}>
                    <h4 className={"HeaderRightLogin"}>Logowanie</h4>
                </a>
                <a href={"/ads"}>
                    <FaUserCircle className={"User"}/>
                </a>
            </div>
        </div>
    )
}
export default Header;
