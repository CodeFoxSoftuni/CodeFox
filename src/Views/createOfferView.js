import React, {Component} from 'react';

export default class CreateOffer extends Component {
    submitForm(e) {
        e.preventDefault();
        this.props.onsubmit(this.usernameField.value, this.passwordField.value);
    }
    render() {
        return (
            <div>
                <div className="create-offer-container">
                    <form className="login">
                        <p>Create</p>
                        <div className="fileUpload">
                            <input type="file" className="upload" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}