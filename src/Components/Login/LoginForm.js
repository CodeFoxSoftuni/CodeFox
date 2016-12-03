import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <form className="login" onSubmit={this.props.onSubmitHandler}>
                <p className="welcome">Welcome back</p>
                <input className="input-txt"
                       type="text"
                       name="username"
                       placeholder="Username"
                       value={this.props.username}
                       onChange={this.props.onChangeHandler}
                       required/>
                <input className="input-txt"
                       type="password"
                       name="password"
                       placeholder="Password"
                       onChange={this.props.onChangeHandler}
                       required/>
                <button type="submit" className="btn btn--right" disabled={this.props.submitDisabled}>Login</button>
            </form>
        );
    }
}