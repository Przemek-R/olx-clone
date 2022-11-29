import React from "react"

import '../styles/Categories.css';
import motoryzacja from "../img/icon-motoryzacja.png";
import nieruchomosci from "../img/icon-nieruchomosci.png";
import praca from '../img/icon-praca.png'
import dom from '../img/icon-dom-i-ogrod.png'
import elektronika from '../img/icon-elektronika.png'
import moda from '../img/icon-moda.png'
import rolnictwo from '../img/icon-rolnictwo.png'
import zwierzeta from '../img/icon-zwierzeta.png'
import dzieci from '../img/icon-dla-dzieci.png'

class Categories extends React.Component {
    render() {
        return (
            <div className={"categories-container"}>
                <div className={"categories-container-wrapper"}>
                    <header>
                        <h3>Kategorie główne</h3>
                    </header>
                    <div className={"categories-container-list"}>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Motoryzacja</span>
                                    <span><img src={motoryzacja} alt="Motoryzacja"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Nieruchomości</span>
                                    <span><img src={nieruchomosci} alt="Nieruchomości"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Praca</span>
                                    <span><img src={praca} alt="Praca"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Dom i Ogród</span>
                                    <span><img src={dom} alt="Dom i Ogród"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Elektronika</span>
                                    <span><img src={elektronika} alt="Elektronika"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Moda</span>
                                    <span><img src={moda} alt="Moda"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Rolnictwo</span>
                                    <span><img src={rolnictwo} alt="Rolnictwo"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Zwierzęta</span>
                                    <span><img src={zwierzeta} alt="Zwierzęta"/></span>
                                </a>
                            </div>
                        </div>
                        <div className={"list"}>
                            <div className={"item"}>
                                <a href="" className={"link parent   "}>
                                    <span className={"list-text"}>Dla Dzieci</span>
                                    <span><img src={dzieci} alt="Dla Dzieci"/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Categories;
