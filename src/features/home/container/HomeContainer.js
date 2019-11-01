import React from 'react'

import Carousel from '../components/Carousel'
import CardItem from '../components/cardItem'
import SingleItem from '../components/singleItem'
import BurgerImage from '../../../Images/burgerBackground/bg1.jpg'
import Footer from '../../app/footer'


// import BurgerInfo from '../components/BurgerInfo'

const HomeContainer = props => {
    return (
        <div className="container-0 text-center" >

            <div className='w-100' style={{ position: 'fixed', height: '100%', backgroundImage: `url(${BurgerImage})` }}>
                <div className='fixed-bottom'>
                    <Footer />
                </div>
            </div>            <Carousel />

            <CardItem />

            <SingleItem />
            {/* <BurgerInfo /> */}

        </div>
    )
}

export default HomeContainer