import React, {Component} from 'react';

export default class CreateForm extends Component {
    render() {
        return (
            <form className="login" onSubmit={this.props.onSubmit}>
                <p id="mainText">Here you can create an offer article to sell your items. Please, specify the category
                    to
                    which your product belongs, upload an image with good quality and write a clear description.</p>
                <div className="stepHeading">Step 1: Define what you're selling</div>
                <select className="selectGroup"
                        name="itemType" onChange={this.props.onChange}>
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
                <div className="stepHeading">Step 2: Choose a category</div>
                <select className="selectGroup"
                        name="category" onChange={this.props.onChange}>
                    <option value="Lingerie">Lingerie</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Shirts-Blouses-Sweaters">Shirts, Blouses, Sweaters</option>
                    <option value="Sport-wear">Sport wear</option>
                </select>
                <div className="stepHeading">Step 3: Upload Image</div>
                <div className="previewComponent">
                    <input className="fileInput" type="file" onChange={this.props.onImageChange}/>
                    <div className="imgPreview">{this.props.imagePreview}</div>
                </div>
                <div className="stepHeading">Step 4: Add Description</div>
                <textarea className='autoExpand' rows='3' data-min-rows='3'
                          name="description" onChange={this.props.onChange}></textarea>
                <div className="stepHeading">Step 5: Add Price</div>
                <input type="number" className='autoExpand' min={0} data-min-rows='3'
                          name="price" onChange={this.props.onChange}></input>
                <div></div>
                <button type="submit" className="btn btn--right">Create</button>
            </form>
        )
    }
}
