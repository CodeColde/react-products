import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../../constants/slideshowSettings';
import theme from '../../constants/theme';

const Slideshow = ({ images }) => {
    return (
        <SliderContainer {...settings}>
            {images.map((image, i) => (
                <div key={i}>
                    <SlideImage src={image.original} alt={image.original} />
                </div>
            ))}
        </SliderContainer>
    );
};

export default Slideshow;

const SliderContainer = styled(Slider)`
    display: flex;
    align-items: center;
    width: 500px;
    height: 500px;

    div {
        display: flex;
        align-items: center;
        height: 100%;
    }

    @media screen and (max-width: ${theme.mediaQueries.width.s}) {
        width: 100%;
        height: 100%;
        min-height: 10vh;
        margin-bottom: 2rem;
    }
`;

const SlideImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`;