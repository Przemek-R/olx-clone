import React, { useState, useEffect } from 'react';
import '../styles/AddAdv.css';
import axios from "axios";

export default function AddAdv() {
    const [title, setTitle] = useState("")
    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [price, setPrice] = useState("")
    const [error, setError] = useState(null)
    const [cities, setCities] = useState([]);
    const [provincies, setProvincies] = useState([])
    const [categories, setCategories] = useState([]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhoto(reader.result);
        };
    }

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await axios.get('http://localhost:3001/get-city');
                setCities(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCity();
    }, []);

    useEffect(() => {
        const fetchProvince = async () => {
            try {
                const response = await axios.get('http://localhost:3001/get-province');
                setProvincies(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProvince();
    }, []);

    useEffect(() => {
        const fetchCategory= async () => {
            try {
                const response = await axios.get('http://localhost:3001/get-category');
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategory();
    }, []);

        function handleSubmit(event) {
        event.preventDefault();

            axios.post('http://localhost:3001/add-advertisement', {
                title,
                photo,
                description,
                price,
                email,
                phone
            })
                .then(response => {
                    alert("Pomyślnie dodano ogłoszenie!")
                    window.location.replace('/ads')
                    console.log(response);
                })
                .catch(error => {
                    console.error("Błąd: " + error.message);
                });
         }

    return (
        <div className={"add-adv-container"}>
            <form onSubmit={handleSubmit} className={"AddAdvForm"}>
            <div className={"add-adv-menu"}>
                <h3 className={"add-adv-h3"}>Dodaj ogłoszenie</h3>
            </div>
            <div className={"add-adv-data"}>
                <h4 className={"add-adv-h4"}>Podstawowe informacje</h4>
                <text className={"add-adv-t"}>Tytuł ogłoszenia</text>
                <input
                    className={"add-adv-input"}
                    type={"text"}
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder={"Wpisz tytuł ogłoszenia"}
                    required
                />
                <text className={"add-adv-t"}>Kategoria</text>
                <select>
                    {categories.map((category, index) => (
                        <option key={index}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className={"add-adv-photo"}>
                <h4 className={"add-adv-h4-photo"}>Zdjęcia</h4>
                <text className={"add-adv-t"}>Dodaj zdjęcia, które przedstawiają sprzedawany przedmiot</text>
                <input type="file" onChange={handleFileChange} />
                <img src={photo} alt="uploaded" />
            </div>
            <div className={"add-adv-description"}>
                <h4 className={"add-adv-h4"}>Opis</h4>
                <textarea
                    placeholder={"Podaj dokładniejsze informacje na temat sprzedawanego przedmiotu"}
                    type={"text"}
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    required
                />
            </div>
            <div className={"add-adv-localization"}>
                <h4 className={"add-adv-h4"}>Lokalizacja</h4>
                <h1>Miasto</h1>
                <select>
                    {cities.map((city, index) => (
                        <option key={index}>{city.name}</option>
                    ))}
                </select>
                <h1>Województwo</h1>
                <select>
                    {provincies.map((province, index) => (
                        <option key={index}>{province.name}</option>
                    ))}
                </select>
            </div>
            <div className={"add-adv-contact"}>
                <h4 className={"add-adv-h4"}>Dane kontaktowe</h4>
                <text className={"add-adv-t"}>Adres e-mail</text>
                <input
                    className={"add-adv-input"}
                    placeholder={"Podaj adres email"}
                    type={"text"}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <text className={"add-adv-t"}>Numer telefonu</text>
                <input
                    className={"add-adv-input"}
                    placeholder={"Podaj numer telefonu"}
                    type={"number"}
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    required
                />
            </div>
            <div className={"add-adv-price"}>
                <h4 className={"add-adv-h4"}>Cena przedmiotu</h4>
                <text className={"add-adv-t"}>Cena</text>
                <input
                    className={"add-adv-input"}
                    placeholder={"Podaj cenę przedmiotu"}
                    type={"text"}
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                    required
                />
                <button className={"add-adv-button-add"} type={"submit"}>Dodaj ogłoszenie</button>
            </div>
            <div className={"add-adv-space"}>
            </div>
            </form>
        </div>
    );
}
