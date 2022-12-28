import React from 'react';

import '../styles/AddAdv.css';

class AddAdv extends React.Component {
    render() {
        return (
            <div className={"add-adv-container"}>
                <div className={"add-adv-menu"}>
                    <h3 className={"add-adv-h3"}>Dodaj ogłoszenie</h3>
                </div>
                <div className={"add-adv-data"}>
                    <h4 className={"add-adv-h4"}>Podstawowe informacje</h4>
                    <text className={"add-adv-t"}>Tytuł ogłoszenia</text>
                    <input className={"add-adv-input"} type={"text"}/>
                    <text className={"add-adv-t"}>Kategoria</text>
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
                <div className={"add-adv-photo"}>
                    <h4 className={"add-adv-h4-photo"}>Zdjęcia</h4>
                    <text className={"add-adv-t"}>Dodaj zdjęcia, które przedstawiają sprzedawany przedmiot</text>
                    <input type={"file"}/>
                </div>
                <div className={"add-adv-description"}>
                    <h4 className={"add-adv-h4"}>Opis</h4>
                    <textarea placeholder={"Podaj dokładniejsze informacje na temat sprzedawanego przedmiotu"} type={"text"}/>
                </div>
                <div className={"add-adv-localization"}>
                    <h4 className={"add-adv-h4"}>Lokalizacja</h4>
                    <input className={"add-adv-input"} placeholder={"Miejscowość lub kod pocztowy"} type={"text"}/>
                </div>
                <div className={"add-adv-contact"}>
                    <h4 className={"add-adv-h4"}>Dane kontaktowe</h4>
                    <text className={"add-adv-t"}>Adres e-mail</text>
                    <input className={"add-adv-input"} placeholder={"Podaj adres email"} type={"text"}/>
                    <text className={"add-adv-t"}>Numer telefonu</text>
                    <input className={"add-adv-input"} placeholder={"Podaj numer telefonu"} type={"text"}/>
                </div>
                 <button className={"add-adv-button-add"}>Dodaj ogłoszenie</button>
            </div>
        );
    }
}
export default AddAdv;
