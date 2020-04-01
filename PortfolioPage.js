import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function PortfolioPage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );
}

export default PortfolioPage;