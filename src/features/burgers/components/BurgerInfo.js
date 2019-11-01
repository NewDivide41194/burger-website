import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import {Link} from 'react-router-dom'

import bg1 from '../../../Images/bgo.jpg'
import * as Colors from '../../../config/color.config'
import * as route from '../../../config/route.config'


const BurgerInfo = props => {
    const { media } = props
    return (
        <div className="pt-0 h-100 " style={{ fontSize: media.desktop ? 25 : 15 }}>
            <div className=" text-center  py-3  ">promotion items!</div>
            <div className="d-flex flex-row flex-wrap flex-lg-nowrap" style={{ fontSize: media.desktop ? 20 : 10, }}>

                <div className="col-lg-6 ">
                    {/* <div className="flex-column "> */}
                    <PromoBurger img={bg1}
                        title={"Get 15% off for today!"}
                        orgPrice={"12"} disPrice={"10"}
                        media={media}
                    />

                </div>
                <div className=" col-lg-6 ">
                    <PromoBurger
                        img={bg1}
                        title={"happ hour promotion!"}
                        orgPrice={"25 "} disPrice={"20"}
                        media={media}
                    />
                </div>
                {/* </div> */}
                {/* </div> */}

            </div>
            <div className="text-center py-3 " >Today Special!</div>
            <div className="col-lg-12 ">
                <TdySpecialBurger
                    img={bg1}
                    media={media}
                />
            </div>
        </div>
    )
}

const PromoBurger = ({ img, title, orgPrice, disPrice, media, price }) => {
    return (
        <div className="card text-light" style={{ fontSize: media.desktop ? 18 : 10, backgroundColor: Colors.navBgColor }}>
            <image src={img} className="img-fluid" alt="promotion" />
            <div className="card-body d-flex flex-column ">
                <span className={`card-title text-center `}>{title}</span>
                <div className="card-text d-flex justify-content-between">
                    <span >${orgPrice}</span>
                    <span>${disPrice}</span>
                </div>
            </div>


        </div>
    )
}

const TdySpecialBurger = ({ img, media }) => {
    return (
        <div className="card " style={{ backgroundColor: Colors.navBgColor, fontSize: media.desktop ? 25 : 15 }}>
            <image src={img} alt ="image" className="img-fluid" />
            <div className="card-body d-flex justify-content-end">
                <Link to={route.home} style={{textDecoration:'none'}} >
                    <div className="d-inline-block p-3 text-center"
                        style={{ borderRadius: 5, background: Colors.orangeRed, color: Colors.white, cursor: 'pointer', }}
                    >
                        <span> Back to Home </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default withMedia(BurgerInfo)

