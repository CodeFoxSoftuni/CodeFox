import React, { Component } from 'react';

export default class HomeView extends Component{
    render(){

        slideDown();
        function slideDown() {
            let parallax = document.getElementsByClassName("parallax")[0];
            parallax.style.height = "380px";
            let parallaxNext = document.getElementsByClassName("parallax-next")[0];
            parallaxNext.style.height = "100px"
        }

        {/*let slideIndex = 1;*/}
        {/*showSlides(slideIndex);*/}

        {/*function plusSlides(n) {*/}
            {/*showSlides(slideIndex += n);*/}
        {/*}*/}

        {/*function currentSlide(n) {*/}
            {/*showSlides(slideIndex = n);*/}
        {/*}*/}

        {/*function showSlides(n) {*/}
            {/*let i;*/}
            {/*let slides = document.getElementsByClassName("mySlides");*/}
            {/*console.log(slides);*/}
            {/*let dots = document.getElementsByClassName("dot");*/}
        //     if (n > slides.length) {slideIndex = 1}
        //     if (n < 1) {slideIndex = slides.length}
        //     for (i = 0; i < slides.length; i++) {
        //         slides[i].style.display = "none";
        //     }
        //     for (i = 0; i < dots.length; i++) {
        //         dots[i].className = dots[i].className.replace(" active", "");
        //     }
        //     slides[slideIndex-1].style.display = "block";
        //     dots[slideIndex-1].className += " active";
        // }

        return (
            <div>
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="numbertext">1 / 3</div>
                        <img src="http://www.lecoqsportif.com/media/images/VISUELS-FW16/home%20page/sparkly(1).jpg" alt="dwa" width="100%">
                        </img>
                            <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">2 / 3</div>
                        <img src="http://www.lecoqsportif.com/media/images/VISUELS-FW16/home%20page/sparkly(1).jpg" alt="dwa" width="100%">
                        </img>
                            <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img src="http://www.lecoqsportif.com/media/images/VISUELS-FW16/home%20page/sparkly(1).jpg" alt="dwa" width="100%">
                    </img>
                            <div className="text">Caption Three</div>
                    </div>

                    {/*<a class="prev" onclick={this.props.plusSlides(-1)}>&#10094;</a>*/}
                    {/*<a class="next" onclick={this.props.plusSlides(-1)}>&#10095;</a>*/}
                </div>
                {/*<br/>*/}
                    {/*<div style="text-align:center">*/}
                    {/*//     <span class="dot" onclick={this.props.currentSlide(1)}></span>*/}
                    {/*//     <span class="dot" onclick={this.props.currentSlide(2)}></span>*/}
                    {/*//     <span class="dot" onclick={this.props.currentSlide(3)}></span>*/}
                    {/*// </div>*/}
            </div>
        );
    }
}