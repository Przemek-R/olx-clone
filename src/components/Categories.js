import React, {useEffect, useState} from "react"

import '../styles/Categories.css'
import cat1 from "../img/icon-cat1.png"
import cat2 from "../img/icon-cat2.png"
import cat3 from '../img/icon-cat3.png'
import cat4 from '../img/icon-cat4.png'
import cat5 from '../img/icon-cat5.png'
import cat6 from '../img/icon-cat6.png'
import cat7 from '../img/icon-cat7.png'
import cat8 from '../img/icon-cat8.png'
import cat9 from '../img/icon-cat9.png'
import axios from "axios";

export default function Categories() {

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
        <div className={"categories-container"}>
            <div className={"categories-container-wrapper"}>
                <header>
                    <h3>Kategorie główne</h3>
                </header>
                <div className={"categories-container-list"}>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Motoryzacja</span>
                                <span><img src={cat1} alt="Motoryzacja"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Nieruchomości</span>
                                <span><img src={cat2} alt="Nieruchomości"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Praca</span>
                                <span><img src={cat3} alt="Praca"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Dom i Ogród</span>
                                <span><img src={cat4} alt="Dom i Ogród"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Elektronika</span>
                                <span><img src={cat5} alt="Elektronika"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Moda</span>
                                <span><img src={cat6} alt="Moda"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Rolnictwo</span>
                                <span><img src={cat7} alt="Rolnictwo"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Zwierzęta</span>
                                <span><img src={cat8} alt="Zwierzęta"/></span>
                            </a>
                        </div>
                    </div>
                    <div className={"list"}>
                        <div className={"item"}>
                            <a href="" className={"link-parent"}>
                                <span className={"list-text"}>Dla Dzieci</span>
                                <span><img src={cat9} alt="Dla Dzieci"/></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"categories-container-wrapper-2"}>
                {advertisemment.map((item, index) => (
                <ul>
                    <li>
                        <div className={"categories-container-wrapper-2-photo"}>
                            <a href="" className={"link-parent"} >
                                <img src={item.photo} alt="photo" className={"img-photo"}/>
                                <h1 className={"h1-photo"}>{item.title}</h1>
                            </a>
                            <h3 className={"h2-photo"}>{item.city}</h3>
                            <h2 className={"h3-photo"}>{item.price} zł</h2>
                        </div>
                    </li>
                </ul>
                ))}
            </div>
            <div className={"categories-container-space"} />
        </div>
    )
}
