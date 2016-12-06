import React, {Component} from 'react';
import Message from '../../model/message';
import observer from '../../model/observer';
import messageCreateForm from './messageCreateForm';


export default class messageCreatePage extends Component {
    constructor(props) {            //sender,receiver,message
        super(props);
        this.state = {
            sender: "guest",
            receiver: "",
            message: ""
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    createMessage(sender, receiver, message) {
        Message.create(sender, receiver, message)
            .then(createMessageSuccess.bind(this));

        function createMessageSuccess(response) {
            this.context.router.push('/messages');
            observer.showInfo("Offer created successfully."); // TODO: Info box not showing after successful query
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.createMessage(this.state.sender, this.state.receiver, this.state.message);
    }

    // Saves the value of description field in the state
    handleChange(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {

        return (
            <div className="create-message-container">
                <messageCreateForm
                    onSubmit={this.submitForm}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

messageCreateForm.contextTypes = {
    router: React.PropTypes.object
};