import React, {Component} from 'react';
import {Link} from 'react-router';
import Offer from '../../model/offer';

export default class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: sessionStorage.getItem('userImage')
        };
        this.bindEventHandlers();
    }
    componentDidMount() {
            // Offer.editMyAccount('test')
            //     .then(editSuccess.bind(this));
            //
            // function editSuccess() {
            //     console.log("Success");
            //     this.context.router.push('/myAccount');
            // }
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    editAccount(image) {
        Offer.editMyAccount(image)
            .then(editSuccess.bind(this));

        function editSuccess() {
            console.log("Success");
            this.context.router.push('/myAccount');
            // observer.showInfo("Photo Changed"); // TODO: Info box not showing after successful query
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.editAccount(this.state.imagePreviewUrl);
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result //THIS IS IMAGE'S BASE64 VALUE, UPLOAD THIS IN DATABASE
            });
        };
        reader.readAsDataURL(file)
    }

    //Saves the value of description field in the state
    // handleChange(event){
    //     event.preventDefault();
    //     let newState = {};
    //     newState[event.target.name] = event.target.value;
    //     this.setState(newState);
    // }

    render() {
        let image = null;
        if (this.state.imagePreviewUrl) {
            image = this.state.imagePreviewUrl;
        }
        else {
            image = "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg";
        }
        return (
            <div>
                <div className="myAccount">
                    <form className="login" onSubmit={this.props.onSubmit}>
                    <section className="profile-photo">
                        <img src={image} alt="user" width="100%"></img>
                        <div className="previewComponent">
                            <input className="fileInput" type="file" onChange={this.props.onImageChange}/>
                            <div className="imgPreview">{this.props.imagePreview}</div>
                            <button type="submit" className="btn btn--right">Update</button>
                        </div>
                    </section>
                    </form>
                    <section>
                        <span className="account-list">
                                <a href="#">Dashboard</a>
                                <Link to="/myOffers">My Offers</Link>
                                <a href="#">Edit Account</a>
                        </span>
                        <br/>
                        <div className="welcome-message">
                            Hello username. From your account manager you can view your recent orders, manage your shipping and billing addresses and edit your account details.

                        </div>
                    </section>
                </div>
            </div>
        );
    }
}