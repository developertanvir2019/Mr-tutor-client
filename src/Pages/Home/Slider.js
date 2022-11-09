import React from 'react';
import { Carousel } from 'react-bootstrap';
import('./slider.css')


const Slider = () => {

    return (
        <div>
            <Carousel className='container'>
                <Carousel.Item>
                    <img
                        className="img-banner d-block w-100"
                        src="https://seekcdn.com/skl/images/studying/body%20images/study-environment.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='mb-5'>
                            <h2>Student care and Tuition</h2>
                            <p>Tuition for class 5-10. teach with 100% carefully..</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-banner"
                        src="https://static.wixstatic.com/media/7fe4e3_c65c29f5c7f44c1c83f808f0d80ab625~mv2.jpg/v1/fill/w_560,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/younglearner(medium%20quality).jpg
                        "
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="mb-5">
                            <h2>Special batch for class 10.</h2>
                            <p>Class 10th student can learn advance physics & math from here.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Slider;



