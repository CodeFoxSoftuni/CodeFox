import React from 'react';

class SingleOffer extends React.Component {
    render() {
        return (
            <span className="offer">
                        <img src={this.props.image} className="offer-image"></img>
                        <p>{this.props.itemType}</p>
                        <p>{this.props.price}</p>
            </span>
        )
    }
}

export default SingleOffer;