import React from 'react'
import { withMedia } from 'react-media-query-hoc'

import * as Colors from '../../../config/color.config'


const BurgerCard = props => {
    const { media } = props
    const arrayReverse = ProductDetail.sort((a, b) => parseFloat(b.id) - parseFloat(a.id))
    return (

        <div className='container'>
            <div className='text-center'>
                <div className='px-5 py-4'>
                    <h1 style={{ color: `${Colors.textBrown}`, fontFamily: 'Volkhov', fontSize: media.mobile ? 25 : 50 }} className="font-weight-bold">The Best From Our Offer</h1>
                    <span style={{ color: `${Colors.textBrown}`, fontFamily: 'Volkhov', fontSize: media.mobile ? 13 : 20, fontWeight: 'lighter' }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
             nibh euismod tincidunt ut laoreet dolore magna aliquam</span>
                </div>

                <div className='row justify-content-center'>

                    {arrayReverse.map((v, k) =>
                        <div className='col-lg-4 p-3' key={k}>
                            <div className='p-3 py-4' style={{ background: Colors.white, borderRadius: 5 }}>
                                <img className='img-fluid' src={process.env.PUBLIC_URL + `${v.imgURL}`} alt='BurgerImage' />
                                <h1 style={{ color: `${Colors.Price}`, fontFamily: 'Volkhov' }}>${v.price}</h1>
                                <h3 style={{ color: `${Colors.textBrown}`, fontFamily: 'Volkhov' }}>{v.name}</h3>
                                <span>{v.about}</span>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>

    )
}

export default withMedia(BurgerCard)

const ProductDetail = [
    {
        id: 1,
        name: 'Standard1',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger1.jpg'
    },
    {
        id: 2,
        name: 'Standard2',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger2.jpg'
    },
    {
        id: 3,
        name: 'Standard3',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger3.jpg'
    },
    {
        id: 4,
        name: 'Standard4',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger4.jpg'
    },
    {
        id: 5,
        name: 'Standard5',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger5.jpg'
    },
    {
        id: 6,
        name: 'Standard6',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger6.jpg'
    },
    {
        id: 5,
        name: 'Standard5',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger5.jpg'
    },
    {
        id: 6,
        name: 'Standard6',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger6.jpg'
    },
    {
        id: 5,
        name: 'Standard5',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger5.jpg'
    },
    {
        id: 6,
        name: 'Standard6',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger6.jpg'
    },
    {
        id: 5,
        name: 'Standard5',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger5.jpg'
    },
    {
        id: 6,
        name: 'Standard6',
        price: 9.90,
        about: 'Lorem ipsum dolor sit amet, consect etuer adipis cing elit, sed diam numy',
        imgURL: '/images/burgers/burger6.jpg'
    },
]