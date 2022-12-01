import React from 'react';

import '../styles/AddAdv.css';

class AddAdv extends React.Component {
    render() {
        return (
            <div className={"AddAdv"}>
            <h1 className={"Title"}> Dodaj ogłoszenie</h1>
                <div className={"Info"}>
                    <h4>Podstawowe informacje</h4>
                    <text>Tytuł ogłoszenia</text>
                    <input placeholder={"np. Ursus C330"}/>
                    <text>Kategoria</text>
                    <select>
                        <option value={""}>Wybierz kategorię</option>
                        <option value={"0"}>Motoryzacja</option>
                        <option value={"1"}>Nieruchomości</option>
                        <option value={"2"}>Praca</option>
                        <option value={"3"}>Dom i Ogród</option>
                        <option value={"4"}>Elektronika</option>
                        <option value={"5"}>Moda</option>
                        <option value={"6"}>Rolnictwo</option>
                        <option value={"7"}>Zwierzęta</option>
                        <option value={"8"}>Dla dzieci</option>
                    </select>
                </div>
                <div className={"Photos"}>
                    <h4>Zdjęcia</h4>
                    <text>Dodaj zdjęcia, które przedstawiają sprzedawany przedmiot</text>
                    <input type={"file"} id={"addphoto"} name={"addphoto"}/>
                </div>
                <div className={"Description"}>
                    <text>Opis</text>
                    <textarea placeholder={"Podaj dokładniejsze informacje na temat sprzedawanego przedmiotu"} type={"text"}/>
                </div>
                <div className={"Localization"}>
                    <text>Lokalizacja</text>
                    <input placeholder={"Miejscowość lub kod pocztowy"} type={"text"}/>
                </div>
                <div className={"Contact"}>
                    <h4>Dane kontaktowe</h4>
                    <text>Adres e-mail</text>
                    <input placeholder={"Podaj adres email"} type={"text"}/>
                    <text>Numer telefonu</text>
                    <input placeholder={"Podaj numer telefonu"} type={"text"}/>
                </div>
                <div className={"Add"}>
                    <a href={"/"}>
                    <button className={"AddButton"}>Dodaj ogłoszenie</button>
                    </a>
                </div>
            </div>
        )
    }
}
export default AddAdv;
