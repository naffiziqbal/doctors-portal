import React from 'react';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import CareSection from './CareSection/CareSection';
import InfoSecton from './InfoSection/InfoSecton';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-15'>
            <Banner/>
            <InfoSecton/>
            <Services/>
            <CareSection/>
            <Appointment/>
        </div>
    );
};

export default Home;
