import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/AdsWindow.css';

const AdsWindow = () => {

    const { id_advertisement } = useParams();
    const [advertisement, setAdvertisement] = useState({})

    useEffect(() => {
        const fetchAdvertisement = async () => {
            const response = await axios.get(`http://localhost:3001/get-advertisement/${id_advertisement}`);
            setAdvertisement(response.data);
        };
        fetchAdvertisement();
    }, []);

    return (
        <div>
                <div className={"ads-w-container"}>
                    <div className={"ads-w-container-2"}>
                        <div className={"ads-w-photo"}>
                            <img src={advertisement.photo} className={"ads-w-img"}/>
                        </div>

                        <div className={"ads-w-title"}>
                            <h3 className={"ads-w-name"}>{advertisement.username}</h3>
                            <h1 className={"ads-w-small"}>sprzedający</h1>

                            <h2 className={"ads-w-s-title"}>Dane kontaktowe:</h2>
                            <h1 className={"ads-w-small"}>{advertisement.phone}</h1>
                            <h1 className={"ads-w-small"}>{advertisement.email}</h1>

                            <h2 className={"ads-w-s-title"}>Lokalizacja:</h2>
                            <h1 className={"ads-w-small"}>{advertisement.city}</h1>
                            <h1 className={"ads-w-small-2"}>{advertisement.province}</h1>
                        </div>
                    </div>
                    <div className={"ads-w-container-3"}>
                        <div className={"ads-w-description"}>
                            <div>
                                <h3 className={"ads-w-desc-h3"}>{advertisement.title}</h3>

                                <h2 className={"ads-w-desc-title"}>{advertisement.price} zł</h2>

                                <h2 className={"ads-w-desc-o"}>OPIS</h2>

                                <h2 className={"ads-w-desc-text"}>{advertisement.description}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default AdsWindow;
