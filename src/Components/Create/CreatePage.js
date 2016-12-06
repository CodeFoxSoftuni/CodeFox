import React, {Component} from 'react';
import Offer from '../../model/offer';
import observer from '../../model/observer';
import CreateForm from './CreateForm';


export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemType: 'Empty', // Set on bras, because it is the first item in the list, and if user does not change the list itemType will be empty
            category: 'Empty',
            imagePreviewUrl: '',
            description: '',
            price: ''
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.submitForm = this.submitForm.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createOffer(itemType, category, image, description, price) {
        Offer.create(itemType, category, image, description, price)
            .then(createOfferSuccess.bind(this));

        function createOfferSuccess(response) {
            this.context.router.push('/offers');
            observer.showInfo("Offer created successfully."); // TODO: Info box not showing after successful query
        }
    }

    submitForm(e) {
        e.preventDefault();
        this.createOffer(this.state.itemType, this.state.category,this.state.imagePreviewUrl, this.state.description, this.state.price);
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

    // Saves the value of description field in the state
    handleChange(event){
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} className="preview" alt="Preview" />);
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }

        return (
                <div className="create-offer-container">
                    <CreateForm
                    onSubmit={this.submitForm}
                    onChange={this.handleChange}
                    onImageChange={this._handleImageChange}
                    imagePreview={$imagePreview}/>
                </div>
        );
    }
}

CreatePage.contextTypes = {
    router: React.PropTypes.object
};