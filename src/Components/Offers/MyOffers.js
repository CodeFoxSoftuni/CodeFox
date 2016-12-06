import React, {Component} from 'react';
import Offer from '../../model/offer';
import SingleOffer from './SingleOffer';

export default class MyOffers extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: []}
    }

    componentDidMount() {
        Offer.loadMyOffers().then(this.loadOffersSuccess.bind(this))
    }

    loadOffersSuccess(response) {
        this.setState({offers: response});
        console.log(response)
    }


    render() {
        return (
            <div id="myOffers-container">
                    <div className="myOffers">
                        <h1 id="myoffHeading">My Offers</h1>
                        {this.state.offers.map((item, index) => {
                            return (
                                <div className="all-offers" key={index}>
                                    <SingleOffer
                                        image={item.image}
                                        category={item.category}
                                        itemType={item.itemType}
                                        price={item.price}
                                        offerId={item._id}
                                    />
                                </div>
                            )
                        })}
                    </div>
            </div>
        )
    }
}