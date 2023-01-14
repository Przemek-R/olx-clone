import React from 'react'

import '../styles/AdsWindow.css'
import car_example from "../img/maluch.jpg";

const AdsWindow = () => {


    return (
        <div className={"ads-w-container"}>
            <div className={"ads-w-container-2"}>
                <div className={"ads-w-photo"}>
                    <h3 className={"ads-w-h3"}>Zdjęcie:</h3>
                    <img src={car_example} className={"ads-w-img"}/>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Tytuł:</h3>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Cena:</h3>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Lokalizacja:</h3>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Opis:</h3>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Email:</h3>
                </div>
                <div>
                    <h3 className={"ads-w-h3"}>Telefon:</h3>
                </div>
            </div>
        </div>
    );
}
export default AdsWindow;
