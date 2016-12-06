import React from 'react';
import $ from 'jquery';
import SingleOffer from './SingleOffer';
import {Link} from 'react-router';

export default class AllOffersGrid extends React.Component {
    componentDidMount() {
        let divWidth = Number($('#left').width()) / 16;
        $('#center').css('margin-left', divWidth + 'em');
    }

    categoryClickHandler() {
        this.props.renderCategory(this.name); // this.name is the name of the clicked category
    }

    render() {
        return (
            <div id="container">
                <section id="left" className="categoriesMenu">
                    <div id='section-label' className="category-link">CATEGORIES</div>
<<<<<<< HEAD
                    <Link to="/category/All" className="category-link">All</Link>
                    <Link to="/category/Lingerie" className="category-link">Lingerie</Link>
                    <Link to="/category/Bottoms" className="category-link">Bottoms</Link>
                    <Link to="/category/Top" className="category-link">Top</Link>
                    <Link to="/category/Sport" className="category-link">Sport</Link>
=======
                    <Link to="/category/All" className="category-link" onClick={this.categoryClickHandler}>All</Link>
                    <Link to="/category/Lingerie" className="category-link" onClick={this.categoryClickHandler} name="Lingerie">Lingerie</Link>
                    <Link to="/category/Bottoms" className="category-link" onClick={this.categoryClickHandler} name="Bottoms">Bottoms</Link>
                    <Link to="/category/Shirts-Blouses-etc." className="category-link" onClick={this.categoryClickHandler} name="Top">Shirts, Blouses etc.</Link>
                    <Link to="/category/Sport wear" className="category-link" onClick={this.categoryClickHandler} name="Sport-wear">Sport wear</Link>
>>>>>>> origin/master
                </section>
                <br></br>
                <section id="center">
                    {this.props.offers.map((item, index) => {
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
                </section>
            </div>
        )
    }
}