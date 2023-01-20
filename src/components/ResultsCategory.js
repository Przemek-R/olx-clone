import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/Categories.css';

const ResultsCategory = () => {
    const [category, setCategory] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const word_p = params.get("word");
        if (word_p !== null) {
            setCategory(word_p);
            axios.get(`http://localhost:3001/search-category?q=${word_p}&caseInsensitive=true`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, []);

    return (
        <div className={"categories-container"}>
            <div className={"categories-container-wrapper-2"}>
                {data && data.map((item, index) => (
                    <ul>
                        <li>
                            <div className={"categories-container-wrapper-2-photo"} key={index}>
                                <a href="" className={"link-parent"}>
                                    <img src={item.photo} alt="photo" className={"categories-img-photo"}/>
                                    <h1 className={"h1-photo"}>{item.title}</h1>
                                </a>
                                <h3 className={"h2-photo"}>{item.city}</h3>
                                <h2 className={"h3-photo"}>{item.price} zł</h2>
                            </div>
                        </li>
                    </ul>
                ))}
                <div className={"categories-container-space"}/>
            </div>
        </div>
    )
}
export default ResultsCategory;
