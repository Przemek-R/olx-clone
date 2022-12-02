import React from 'react';

import '../styles/Messages.css'

class Messages extends React.Component {
    render() {
        return (
            <div className={"messages-container"}>
                <div className={"messages-menu"}>
                    <h3 className={"messages-h3"}>Twoje wiadomości</h3>
                </div>
            </div>
        );
    }
}export default Messages;
