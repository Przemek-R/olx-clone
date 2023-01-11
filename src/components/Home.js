import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Categories from "./Categories";

export default function Home() {
    return (
        <div className={"home-container"}>
            <div>
                <Header />
            </div>
            <div>
                <Categories />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


