import React, { Component } from 'react';

export default class LoginView extends Component{
    onSubmit(e){
        e.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(e);
        }
    }
    render(){
        let options = {
            email: {
                label: "Email ddress",
                placeholder: "Email"
            },
            password: {
                label: "Password",
                placeholder: "Password"
            },
            checkbox: {
                text: "Check me out"
            },
            submitButton: {
                text: "Submit"
            }
        };
        options = Object.assign(options, this.props.options || {});
        return (
            <form className="container">
                <div className="login">
                    <h1 className="login-heading">Login</h1>
                    <form >
                        <input type='text' placeholder={options.email.placeholder} required className="input-txt" />
                        <input type="password" name="password" placeholder={options.password.placeholder} required className="input-txt" />
                        <div class="login-footer">
                            <button type="submit" className="btn btn--right" onClick={this.onSubmit}>{options.submitButton.text}</button>
                        </div>
                    </form>
                </div>
            </form>
        );

    }
}