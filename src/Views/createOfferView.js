import React, {Component} from 'react';
import $ from 'jquery'

export default class CreateOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {file: '',
            imagePreviewUrl: '',
            itemType: 'bras', // Set on bras, because it is the first item in the list, and if user does not change the list itemType will be empty
            description: ''
        };
    }

    submitForm(e) {
        e.preventDefault();
        this.props.onsubmit(this.state.itemType, this.state.description, this.state.imagePreviewUrl);
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
            $imagePreview = (<img src={imagePreviewUrl} className="preview" />);
        } else {
            $imagePreview = (<div className="previewText"></div>);
        }

        return (
            <div>
                <div className="create-offer-container">
                    <form className="login" onSubmit={this.submitForm.bind(this)}>
                        <p id="mainText">Here you can create an offer article to sell your items. Please, specify the category to
                            which your product belongs, upload an image with good quality and write a clear description.</p>
                        <div className="stepHeading">Step 1: Define what you're selling</div>
                        <select className="selectGroup"
                                name="itemType" onChange={this.handleChange.bind(this)}>
                            <optgroup className="optionGroup" label="Lingerie">
                                <option value="bras">Bras</option>
                                <option value="panties">Panties</option>
                                <option value="socks">Socks</option>
                                <option value="boxers">Boxers</option>
                            </optgroup>
                            <optgroup className="optionGroup" label="Shirts, Blouses, Sweaters">
                                <option value="blouses">Blouses</option>
                                <option value="shirts">Shirts</option>
                                <option value="sweaters">Sweaters</option>
                            </optgroup>
                            <optgroup className="optionGroup" label="Bottoms">
                                <option value="jeans">Jeans</option>
                                <option value="skirts">Skirts</option>
                            </optgroup>
                            <optgroup className="optionGroup" label="Sport wear">
                                <option value="hoodies">Hoodies</option>
                                <option value="trousers">Trousers</option>
                                <option value="t&t">Tops and Tees</option>
                                <option value="leggings">Leggings</option>
                            </optgroup>
                            <optgroup className="optionGroup" label="Shoes">
                                <option value="sneakers">Sneakers</option>
                                <option value="boots">Boots</option>
                                <option value="ballerinas">Ballerinas</option>
                            </optgroup>
                        </select>
                        <div className="stepHeading">Step 2: Upload Image</div>
                        <div className="previewComponent">
                            <form /*onSubmit={(e)=>this.submitForm(e)}*/>
                                <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
                            </form>
                            <div className="imgPreview" >{$imagePreview}</div>
                        </div>
                        <div className="stepHeading">Step 3: Add Description</div>
                        <textarea className='autoExpand' rows='3' data-min-rows='3'
                                  name="description" onChange={this.handleChange.bind(this)}></textarea>
                        <button type="submit" className="btn btn--right"
                               /* onClick={this.submitForm.bind(this)}*/>Create</button>
                    </form>
                </div>
            </div>
        );
    }
}