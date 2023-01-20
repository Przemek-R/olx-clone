import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Ads.css';

const Ads = () => {

    // const [advertisement, setAdvertisement] = useState([])
    // useEffect(() => {
    //     const fetchAdvertisement = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:3001/get-advertisement');
    //             setAdvertisement(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchAdvertisement();
    // }, []);

    const [ads, setAds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/get-advertisement');
                setAds(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (localStorage.getItem('token')) {
            fetchData();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.replace('/login')
    }

    return (
        <div className={"ads-container"}>
            <div className={"ads-menu"}>
                <h3 className={"ads-h3"}>Twoje ogłoszenia</h3>
                <ul className={"ads-list"}>
                    <li className={"ads-list-elem"}>
                        <a href="/ads" className={"ads-link"}>
                            <span className={"ads-text"}>Ogłoszenia</span>
                        </a>
                    </li>
                    <li className={"ads-list-elem"}>
                        <a href="/settings" className={"ads-link"}>
                            <span className={"ads-text"}>Ustawienia</span>
                        </a>
                    </li>
                    <li className={"ads-list-elem"}>
                        <button className={"ads-add-button-logout"} onClick={handleLogout}>Wyloguj</button>
                    </li>
                </ul>
            </div>
            <div className={"ads-add"}>
                <a href={"/add-advertisement"}>
                    <button className={"ads-add-button"}>Dodaj ogłoszenie</button>
                </a>
            </div>
            <div className={"ads-container-wrapper"}>
                {ads
                    .filter(item => item.email === localStorage.getItem('email') )
                    .map((item, index) => (
                    <ul>
                        <li>
                            <div key={item.email} className={"ads-container-wrapper-photo"}>
                                <Link to={`/ads-window/${item.id_advertisement}`}>
                                    <img src={item.photo} alt="photo" className={"ads-img-photo"}/>
                                    <h1 className={"h1-photo"}>{item.title}</h1>
                                </Link>
                                <h3 className={"h2-photo"}>{item.city}</h3>
                                <h2 className={"h3-photo"}>{item.price} zł</h2>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
export default Ads;
