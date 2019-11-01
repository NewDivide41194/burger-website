import React, { useState, useEffect } from 'react'
import { withMedia } from 'react-media-query-hoc'

import * as Colors from '../../../config/color.config'
import BurgerImage from '../../../Images/burgerBackground/bg1.jpg'
import LocationCard from '../components/locationCards'
import ContactPage from '../components/contactForm'
import Footer from '../../app/footer'
import ContactMap from '../../map/contactMap'

const ContactContainer = props => {
    const { media } = props

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.pageYOffset);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        const y = () => setHeight(window.pageYOffset)

        window.addEventListener('resize', handleResize)
        window.addEventListener('resize', handleResize)
        console.log(height)
        return () => {
            window.removeEventListener('resize', y)
            window.removeEventListener('resize', handleResize)
        }
    })

    return (<div className="container-0 text-center" >

        <div className='w-100' style={{ position: 'fixed', height: '100%', backgroundImage: `url(${BurgerImage})` }}>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>

        <div className='w-100 bg-light' style={{ height: `${width <= 991 ? '2050px' : '650px'}`, zIndex: 1, position: 'absolute', width: '200px', marginTop: `${width <= 991 ? '0px' : '430px'}` }} />

        <div className='w-100' style={{ marginBottom: `${width <= 991 ? '560px' : '630px'}`, background: `${Colors.bgRed}`, height: 350, zIndex: 1, position: 'absolute', width: '200px', marginTop: `${width <= 991 ? '1750px' : '1080px'}` }} />


        <div className='container' style={{ zIndex: 4, position: 'relative', paddingTop: `${width <= 911 ? '30px' : '80px'}` }} >
            <div className='py-5 px-4'>
                <span
                    style={{ color: `${width <= 911 ? Colors.textBrown : Colors.textWhite}`, fontFamily: 'Volkhov', fontWeight: 'bold', fontSize: media.mobile ? 25 : 50 }}>The Best From Our Offer</span>
                <br />
                <span style={{ color: `${width <= 911 ? Colors.textBrown : Colors.textWhite}`, fontFamily: 'Volkhov', fontSize: media.mobile ? 14 : 18, fontWeight: 'lighter' }}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam</span>
            </div>
            <div className='bg-success' style={{ height: '300px' }}>
                <ContactMap />
            </div>

            <div className='bg-light' style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <LocationCard />
            </div>
            <div>
                <ContactPage />
            </div>
        </div>

    </div>

    )
}

export default withMedia(ContactContainer)