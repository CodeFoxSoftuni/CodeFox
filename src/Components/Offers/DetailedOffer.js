import React from 'react';
import Offer from '../../model/offer';
import '../../Styles/detailOffer-Style.css'

class DetailedOffer extends React.Component {
    constructor(props) {
        super(props);
        this.state={details: {}};
    }

    componentDidMount() {
        Offer.viewDetailed(this.props.params.offerId)
            .then(this.viewDetailedSuccess.bind(this))
    }

    viewDetailedSuccess(response) {
        this.setState({details: response});
    }

    render() {
        return (
            <div className="singleOffer" id="Offer">
                <div><h1>Detailed offer</h1></div>
                <section className="singleOffer-image">
                        <img src={this.state.details.image || 'data:image/png;base64,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'} className="offer-image"></img>
                </section>
                <section className="singleOffer-info">
                            <span>{this.state.details.category}</span>
                            <span>{this.state.details.itemType}</span>
                            <span className="offerPrice">{this.state.details.price}</span>
                            <span>{this.state.details.description}</span>
                </section>
            </div>
        )
    }
}

export default DetailedOffer;