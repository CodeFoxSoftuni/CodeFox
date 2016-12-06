import React from 'react';
import {Link} from 'react-router';

class MySingleMessage extends React.Component {

    render() {
        return (
            <span className="message" id="singleMessage">
                <Link to={"/offers/" + this.props.messageId}>
            </Link>
                        <div id="messageInfo">
                            <h3 >{this.props.sender}</h3>
                            <h3 >{this.props.receiver}</h3>
                            <p>{this.props.message}</p>
                            <Link to={"/messages/" + this.props.offerId}>See more</Link>
                        </div>
            </span>
        )
    }
}

export default MySingleMessage;