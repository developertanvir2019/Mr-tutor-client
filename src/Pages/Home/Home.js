import React from 'react';
import useTitle from '../../extra/useTitle';
import ExtraSection from './ExtraSection';
import Slider from './Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>

            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;