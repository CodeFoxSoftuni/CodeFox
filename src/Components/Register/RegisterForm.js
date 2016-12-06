import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="login" onSubmit={this.props.onSubmitHandler}>
                <p className="welcome">Welcome</p>
                <input
                    className="input-txt"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.props.username}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <input
                    className="input-txt"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.password}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <input
                    className="input-txt"
                    type="password"
                    name="confirm"
                    placeholder="Confirm Password"
                    value={this.props.confirm}
                    onChange={this.props.onChangeHandler}
                    required
                />
                <div className="previewComponent">
                    <input className="fileInput" type="file" onChange={this.props.onImageChange}/>
                    <div className="imgPreview">{this.props.image}</div>
                </div>
                <button className="btn btn--right" type="submit" disabled={this.props.submitDisabled}>Register</button>
            </form>
        );
    }
}