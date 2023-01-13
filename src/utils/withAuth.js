import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
    return class extends Component {
        render() {
            if (!localStorage.getItem('token')) {
                return <Redirect to='/login' />
            }
            return <WrappedComponent {...this.props} />
        }
    }
}

export default withAuth;
