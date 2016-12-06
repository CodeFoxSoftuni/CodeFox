import React, {Component} from 'react';
import Offer from '../../model/offer';
import AllOffersGrid from './AllOffersGrid';
export default class OffersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: []}
    }

    componentDidMount() {
        Offer.loadOffers().then(this.loadOffersSuccess.bind(this))
    }

    loadOffersSuccess(response) {
        this.setState({offers: response});
    }


    render() {
        return (
            <div>
                <AllOffersGrid
                    offers={this.state.offers}
                    renderCategory={Offer.loadOffers}
                />
            </div>
        )
    }
}

