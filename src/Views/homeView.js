import React from 'react';
import '../Styles/SlideShow-Styles.css'

export default class HomeView extends React.Component{
    render() {
        let slideIndex = 0;
        setTimeout(showSlides, 20);
        function showSlides() {
            let slides = document.getElementsByClassName("mySlides");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            if (slides[slideIndex - 1]) {
                slides[slideIndex - 1].style.display = "block";
            }
            setTimeout(showSlides, 4000);
        }

        return (
            <div>
                <div className="slideShow-container">
                    <div className="mySlides fade">
                        <img src="https://images.cdn-outlet.com/yo-images/homepage/onzie-fall-collection.jpg" alt="dwa"
                             width="100%">
                        </img>
                    </div>
                    <div className="mySlides fade">
                        <img src="https://www.peppermayo.com/eshop/image.php?id=53&type=N" alt="dwa" width="100%">
                        </img>
                    </div>
                    <div className="mySlides fade">
                        <img src="https://www.peppermayo.com/eshop/image.php?id=144&type=N" alt="dwa" width="100%">
                        </img>
                    </div>
                </div>
            </div>
        );
    }
}