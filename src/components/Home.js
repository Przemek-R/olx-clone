import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Categories from "./Categories";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
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
}
export default Home;


