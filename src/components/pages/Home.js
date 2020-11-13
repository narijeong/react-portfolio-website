import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Resume from '../Resume';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <> 
            <HeroSection />
            <Resume />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
