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
                <SlideBody key={i}>
                    <SlideImage src={image.original} alt={image.original} />
                </SlideBody>
            ))}
        </SliderContainer>
    )
}

export default Slideshow;

const SliderContainer = styled(Slider)`
    display: block;
    width: 500px;
    height: 500px;

    @media screen and (max-width: ${theme.mediaQueries.width.s}) {
        width: 100%;
        height: 100%;
        min-height: 10vh;
    }
`;

const SlideBody = styled.div`
    width: 100%;
    height: 100%;
`;

const SlideImage = styled.img`
    height:100%;
    width: 100%;
    object-fit: contain;
`;