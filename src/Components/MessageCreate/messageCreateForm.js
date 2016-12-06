import React, {Component} from 'react';

export default class CreateMessageForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <p id="mainText">Here you can send a message to every user.</p>
                <p className="welcome">Sender:</p>
                <input className="input-txt"
                       type="text"
                       name="sender"
                       placeholder="Username"
                       value={this.props.username}
                       onChange={this.props.onChangeHandler}
                       required/>

                <p className="welcome">To:</p>
                <input className="input-txt"
                       type="text"
                       name="receiver"
                       placeholder="Username"
                       value={this.props.username}
                       onChange={this.props.onChangeHandler}
                       required/>
                <div className="stepHeading">Write the message here.</div>
                <textarea className='autoExpand' rows='3' data-min-rows='3'
                          name="message" onChange={this.props.onChange}></textarea>

                <div></div>
                <button type="submit" className="btn btn--right">Send</button>
            </form>
        )
    }
}
