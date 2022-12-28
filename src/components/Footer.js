import React from "react"

import '../styles/Footer.css';
import logo from '../img/olx-logo.svg'

class Footer extends React.Component {
    render() {
        return (
            <div className={"footer-container"}>
                <div className={"footer-part-1"}>
                </div>
                <div className={"footer-part-2"}>
                    <a href={"/"}>
                    <img className={"footer-part-2-image"} src={logo} alt="OLX LOGO" />
                    </a>
                    <div className={"footer-part-2-description"}>
                        <p>OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe
                            ogłoszenia i łatwo skontaktujesz się z ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje, samochody. Jeśli chcesz coś sprzedać - w
                            prosty sposób dodasz bezpłatne ogłoszenia. Chcesz coś kupić - tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku na OLX.pl</p>
                        <div className={"footer-part-2-social-links"}>
                            <p>Dołącz do nas:</p>
                            <ul>
                                <li>
                                    <a className={"icon-facebook"} href="https://www.facebook.com/olx.polska" target="_blank" alt="FACEBOOK LOGO"></a>
                                </li>
                                <li>
                                    <a className={"icon-instagram"} href="https://www.instagram.com/olxpolska" target="_blank" alt="INSTAGRAM LOGO"></a>
                                </li>
                                <li>
                                    <a className={"icon-youtube"} href="https://www.youtube.com/channel/UCGr18y85p6zXQwBev6CGwow" target="_blank" alt="YOUTUBE LOGO"></a>
                                </li>
                                <li>
                                    <a className={"icon-linkedin"} href="https://pl.linkedin.com/company/olxpraca" target="_blank" alt="LINKEDIN LOGO"></a>
                                </li>
                                <li>
                                    <a className={"icon-pinterest"} href="https://pl.pinterest.com/olxpolska" target="_blank" alt="PINTEREST LOGO"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={"footer-part-3"}>
                    <div className={"footer-part-3-list"}>
                        <ul>
                            <li>Motoryzacja</li>
                            <li>Nieruchomości</li>
                            <li>Praca</li>
                         </ul>
                        <ul>
                            <li>Dom i Ogród</li>
                            <li>Elektronika</li>
                            <li>Moda</li>

                        </ul>
                        <ul>
                            <li>Rolnictwo</li>
                            <li>Zwierzęta</li>
                            <li>Dla Dzieci</li>
                        </ul>
                        <ul>
                            <li>O nas</li>
                            <li>Kontakt</li>
                            <li>Pomoc</li>
                        </ul>
                    </div>
                </div>
                <div className={"footer-part-4"}>
                    <span>OLX clone - Przemysław Świercz & Konrad Dunal</span>
                </div>
            </div>
        )
    }
}
export default Footer;
