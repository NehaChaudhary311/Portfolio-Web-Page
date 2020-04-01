import React from 'react';

import Hero from '../components/Hero';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitles} text={props.text} />
        </div>
    );

}

export default HomePage;