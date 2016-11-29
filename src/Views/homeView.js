import React from 'react';
import '../Styles/SlideShow-Styles.css'

export default class HomeView extends React.Component{
    render(){

        slideDown();
        function slideDown() {
            let parallax = document.getElementsByClassName("parallax")[0];
            parallax.style.height = "80px";
            let parallaxNext = document.getElementsByClassName("parallax-next")[0];
            parallaxNext.style.height = "40px"
        }
            let slideIndex = 0;
            setTimeout(showSlides,20);
        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex> slides.length) {
                slideIndex = 1
            }
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 4000);
        }
        return (
            <div>
                <div className="slideShow-container">
                    <div className="mySlides fade">
                        <div className="numberText">1 / 3</div>
                        <img src="https://images.cdn-outlet.com/yo-images/homepage/onzie-fall-collection.jpg" alt="dwa" width="100%">
                        </img>
                            <div className="text">Caption Text</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numberText">2 / 3</div>
                        <img src="https://www.peppermayo.com/eshop/image.php?id=53&type=N" alt="dwa" width="100%">
                        </img>
                            <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numberText">3 / 3</div>
                        <img src="https://www.peppermayo.com/eshop/image.php?id=144&type=N" alt="dwa" width="100%">
                    </img>
                            <div className="text">Caption Three</div>
                    </div>
                </div>
            </div>
        );
    }
}