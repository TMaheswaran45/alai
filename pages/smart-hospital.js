import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/smart-hospital/MainBanner';
import About from '../components/smart-hospital/About';
import Cta from '../components/smart-hospital/Cta';
import Funfacts from '../components/home-one/Funfacts';
import Team from '../components/home-five/Team';
import Feedback from '../components/home-five/Feedback';
import Blog from '../components/smart-hospital/Blog';

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header />
            <MainBanner />
            <Cta />
            <Team />
            <Feedback />
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)