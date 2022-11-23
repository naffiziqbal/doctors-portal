import React from 'react';
import Appointment from './HomeSectionAppointment/Appointment';
import Banner from './Banner/Banner';
import CareSection from './CareSection/CareSection';
import InfoSecton from './InfoSection/InfoSecton';
import Services from './Services/Services';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
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
