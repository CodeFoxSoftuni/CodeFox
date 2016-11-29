import React, { Component } from 'react';

export default class RegisterView extends Component{
    onSubmit(e){
        e.preventDefault();
        if(this.props.onSubmit){
            this.props.onSubmit(e);
        }
    }
    render(){

        slideUp();
        function slideUp() {
            let parallax = document.getElementsByClassName("parallax")[0];
            parallax.style.height = "100%";
            let parallaxNext = document.getElementsByClassName("parallax-next")[0];
            parallaxNext.style.height = "740px"
        }
        return (
            <form className="container">
                <div className="login">
                    <form >
                        <input type='text' placeholder="Email" required className="input-txt" />
                        <input type="password" name="password" placeholder="Password" required className="input-txt" />
                        <input type="password" name="cpassword" placeholder="Confirm Password" />
                        <div class="login-footer">
                            <button type="submit" className="btn btn--right" onClick={this.onSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </form>
        );

    }
}