import React, {Component} from 'react';
import Message from '../../model/message';
 import MySingleMessage from './MySingleMessage';

export default class MyInboxMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: []}
    }

    componentDidMount() {
        Message.loadMyMessagesInbox().then(this.loadMessagesSuccess.bind(this))
    }

    loadMessagesSuccess(response) {
        this.setState({messages: response});
        console.log(response)
    }

    render() {
        return (
            <div className="myInboxMessages">
                <h1>My Inbox Messages</h1>
                {this.state.messages.map((item, index) => {
                    return (
                        <div className="all-messages" key={index}>
                            <MySingleMessage
                                sender={item.sender}
                                receiver={item.receiver}
                                message={item.message}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}