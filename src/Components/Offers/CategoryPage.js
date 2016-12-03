import React, {Component} from 'react';
import Offer from '../../model/offer';
import AllOffersGrid from './AllOffersGrid';

export default class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {offers: []}
    }

    componentDidMount() {
        Offer.loadOffers(this.props.params.categoryName).then(this.loadOffersSuccess.bind(this))
    }

    loadOffersSuccess(response) {
        this.setState({offers: response});
    }


    render() {
        return (
            <div>
                <AllOffersGrid
                    offers={this.state.offers}/>
            </div>
        )
    }
}

CategoryPage.contextTypes = {
    router: React.PropTypes.object
};


