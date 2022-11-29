import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../components/Home';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        )
    }
}
export default AppRouter;
