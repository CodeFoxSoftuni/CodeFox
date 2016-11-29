import React from 'react';
import '../Styles/allOffers-Styles.css'

export default class AllOffersGrid extends React.Component {
    render(){
    const bigDivStyle = {height:'210px'};
    const smallDivStyle = { height:'140px' };
    const mediumDivStyle = {height:'170px'};
        return(
            <div id="grid_container">
                <div style={bigDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fJ41F7' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={bigDivStyle}>
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={smallDivStyle}>
                    <img className="offerImg" src='http://bit.ly/2fJbdAJ' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={bigDivStyle}>
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={mediumDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={mediumDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={bigDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={mediumDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={mediumDivStyle} >
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={bigDivStyle}>
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
                <div style={smallDivStyle}>
                    <img className="offerImg" src='http://bit.ly/2fO4V6l' alt="ClothingImg" />
                    <p className="offerTitle">Offer Title</p>
                    <p className="offerPrice">Offer Price</p>
                    <p onClick={this.props.offerClicked} className="toFullLink">See Full</p>
                </div>
            </div>
        )
    }
}