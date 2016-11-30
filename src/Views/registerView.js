import React, {Component} from 'react';

export default class RegisterView extends Component {
    submitForm(e) {
        e.preventDefault();
        this.props.onsubmit(this.usernameField.value, this.passwordField.value);
    }

    render() {
        return (
            <div className="container">
                <form className="login">
                    <input type='text' placeholder="Username" required
                           ref={e => this.usernameField = e} className="input-txt"/>
                    <input type="password" name="password" placeholder="Password" required
                           ref={e => this.passwordField = e} className="input-txt"/>
                    <input type="password" name="cpassword" placeholder="Confirm Password"/>
                    <button type="submit" className="btn btn--right"
                            onClick={this.submitForm.bind(this)}>Register</button>
                </form>
            </div>
        );
    }
}