import React, {useEffect, useState} from "react"
import '../styles/AdsWindow.css'
import axios from "axios";


const AdsWindow = () => {

    const [advertisemment, setAdvertisement] = useState([])

    useEffect(() => {
        const fetchAdvertisement= async () => {
            try {
                const response = await axios.get('http://localhost:3001/get-advertisement');
                setAdvertisement(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAdvertisement();
    }, []);


    return (
        <div>
            {advertisemment.map((item, index) => (
                <div className={"ads-w-container"}>
                <div className={"ads-w-container-2"}>
                <div className={"ads-w-photo"}>
                    <img src={item.photo} className={"ads-w-img"}/>
                </div>

                <div className={"ads-w-title"}>
                    <h3 className={"ads-w-name"}>{item.name}</h3>
                    <h1 className={"ads-w-small"}>sprzedający</h1>

                    <h2 className={"ads-w-s-title"}>Dane kontaktowe:</h2>
                    <h1 className={"ads-w-small"}>{item.phone}</h1>
                    <h1 className={"ads-w-small"}>{item.email}</h1>

                    <h2 className={"ads-w-s-title"}>Lokalizacja:</h2>
                    <h1 className={"ads-w-small"}>{item.city}</h1>
                    <h1 className={"ads-w-small-2"}>{item.province}</h1>
                </div>
            </div>
            <div className={"ads-w-container-3"}>
                    <div className={"ads-w-description"}>
                    <div>
                        <h3 className={"ads-w-desc-h3"}>{item.title}</h3>

                        <h2 className={"ads-w-desc-title"}>{item.price} zł</h2>

                        <h2 className={"ads-w-desc-o"}>OPIS</h2>

                        <h2 className={"ads-w-desc-text"}>{item.description}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
            ))}
        </div>
    );
}
export default AdsWindow;
