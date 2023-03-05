import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width="50%">
                <div>
                    <img src="./pic1.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="./pic2.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="./pic3.webp" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="./pic4.webp" />
                    <p className="legend">Las Vegas</p>
                </div>

            </Carousel>
        );
    }
};

export default DemoCarousel