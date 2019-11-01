import React, { useEffect, useState } from 'react'

import Content from '../components/content';
import Footer from '../../app/footer'
import BurgerImage from '../../../Images/burgerBackground/bg1.jpg'
import '../../../../src/assets/css/about.css'
import AboutTitle from '../components/AboutTitle'
import Progress from '../components/progress'
import ReactPlayer from '../components/ReactPlayer'
import { withMedia } from 'react-media-query-hoc';
import * as Colors from '../../../config/color.config'
import MenuCard from '../components/MenuCard';
import CardData from '../components/cardData';
import ToTop from '../../app/toTopButton';


const AboutContainer = props => {
    const { media } = props
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return (
        <div>
            <ToTop/>
            <div className='container-fluid' style={{ position: 'fixed', height: '100%', backgroundImage: `url(${BurgerImage})` }}>
                <div className='fixed-bottom'>
                    <Footer />
                </div>
            </div>
            <div className="bg-light" style={{ paddingBottom: 80, marginBottom: `${width <= 991 ? '560px' : '630px'}`, zIndex: 2, position: 'relative' }}>

                <div className="container-fluid p-0 overflow-hidden">
                    <div>  <AboutTitle /></div>

                    <div className="d-flex flex-wrap flex-lg-nowrap p-5" style={{ background: `${Colors.Price}`, fontSize: media.desktop ? 15 : media.tablet ? 18 : 12 }}>
                        <div className="flex-fill">
                            <h2 className="px-5 py-4" >Our Process</h2>
                            <p className="px-5 py-2" >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci
                    </p>
                            <Progress progressdata={60} className="px-5 " desc={"MEETINGS"} />
                            <Progress progressdata={70} className="px-5 " desc={"BRAINSTORMING"} />
                            <Progress progressdata={80} className="px-5 " desc={"DEVELOPMENT"} />
                        </div>
                        <div className="flex-fill" style={{ border: '4px solid white' }}><ReactPlayer /></div>
                    </div>

                    <div className="mx-auto py-5">
                        <Content />
                    </div>

                    <div className="row justify-content-center" >
                        <div className="col-xs-12 col-lg-3 py-3" style={{ borderRight: '1px dotted black' }} >
                            <MenuCard title={"Burgers"}>
                                <CardData menu="Classic Burger" price="2.99" desc="An forensibus incorrupte con" />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                                <CardData menu=" Classic Burger " price="2.99" desc="An forensibus incorrupte " />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                            </MenuCard>
                        </div>
                        <div className="col-xs-12 col-lg-3 py-3 " style={{ borderRight: '1px dotted black' }} >
                            <MenuCard title={"Sandwiches"}>
                                <CardData menu="Classic Burger" price="2.99" desc="An forensibus incorrupte con" />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                                <CardData menu=" Classic Burger " price="2.99" desc="An forensibus incorrupte " />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                            </MenuCard>
                        </div>
                        <div className="col-xs-12 col-lg-3 py-3 ">
                            <MenuCard title={"Salads"}>
                                <CardData menu="Classic Burger" price="2.99" desc="An forensibus incorrupte con" />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                                <CardData menu=" Classic Burger " price="2.99" desc="An forensibus incorrupte " />
                                <CardData menu="Special Big Burger" price="4.99" desc="Et ius platonem electram, et ancillae " />
                                <CardData menu="Mexican Burger" price="3.99" desc="An forensibus concludaturque " />
                            </MenuCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withMedia(AboutContainer);

