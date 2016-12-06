import React, {Component} from 'react';
import $ from 'jquery'

export default class Cart extends Component {
    componentDidMount(){
        this.createLisfromSessionStorage();
    }
    createLisfromSessionStorage(){
        let total = 0;
        for (let product of  JSON.parse(sessionStorage.cart)){
            let removeBtn = $('<button type="submit" className="btn btn--right" id="removeBtn">Remove</button>');
            let li = $("<li></li>").text('Category: '+product.category+', Type: '+product.type+', Price: '+product.price);
            li.append(removeBtn);
            $('#products').append(li);
            total+=Number(product.price.match(/\d+/)[0]);
        }
        let totalLi = $("<li></li>").text('Total: ' + total);
        totalLi.addClass('total');
        $('#products').append(totalLi);
        console.log(JSON.parse(sessionStorage.cart));
    }
    render() {
        return (
            <form className="cart-container" onSubmit={this.props.onSubmitHandler}>
                <p className="welcome">Your shopping cart</p>
                <ul id="products">

                </ul>
                <button type="submit" className="btn btn--right" disabled={this.props.submitDisabled}>Buy</button>
            </form>
        );
    }
}