import React from 'react'

import '../styles/AdsWindow.css'
import car_example from "../img/maluch.jpg";

const AdsWindow = () => {

    return (
        <div className={"ads-w-container"}>
            <div className={"ads-w-container-2"}>

                <div className={"ads-w-photo"}>
                    <img src={car_example} className={"ads-w-img"}/>
                </div>

                <div className={"ads-w-title"}>
                    <h3 className={"ads-w-name"}>Jan</h3>
                    <h1 className={"ads-w-small"}>sprzedający</h1>

                    <h2 className={"ads-w-s-title"}>Dane kontaktowe:</h2>
                    <h1 className={"ads-w-small"}>504 203 100</h1>

                    <h2 className={"ads-w-s-title"}>Lokalizacja:</h2>
                    <h1 className={"ads-w-small"}>Kraków</h1>
                    <h1 className={"ads-w-small-2"}>małopolskie</h1>
                </div>

            </div>

            <div className={"ads-w-container-3"}>

                <div className={"ads-w-description"}>
                    <div>
                        <h3 className={"ads-w-desc-h3"}>Maluch 126p, stan igła, dziodek w garażu trzymał</h3>

                        <h2 className={"ads-w-desc-title"}>15 000 zł</h2>

                        <h2 className={"ads-w-desc-o"}>OPIS</h2>

                        <h2 className={"ads-w-desc-text"}>Auto sprowadzane pierwszy właściciel w kraju od 2007 roku. Przegląd ważny do 01.2024 roku.
                            Zadbany, oryginalny przebieg, używany przez dziodka tylko na potrzeby prywatne.
                            Do samochodu dodajemy alufelgi z letnimi oponami.
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default AdsWindow;
