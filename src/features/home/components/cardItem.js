import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import bg1 from '../../../Images/bg.jpg'
import bg2 from '../../../Images/b.jpg'
import bg3 from '../../../Images/bg2.jpg'
import '../../../assets/css/burgerTypehover.css'
import * as route from '../../../config/route.config'

const CardItem = props => {
    const { media } = props
    // const [left, setLeft] = useState(true)
    // const [right, setRight] = useState(false)
    // const [width, setWidth] = useState(window.innerWidth)
    // const move = 500

    const settings = {
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        rows: 1,
        arrows: true,
        autoplay: true,
        slidesPerRow: 1,
    }

    // const RightButton = () => {
    //     const elemt = document.getElementById('box')
    //     setLeft(false)
    //     elemt.scrollLeft += move
    //     console.log(elemt.scrollLeft)
    //     if (elemt.scrollWidth - (elemt.scrollLeft + elemt.offsetWidth) <= move) setRight(true)
    // }
    // const LeftButton = () => {
    //     const elemt = document.getElementById('box')
    //     elemt.scrollLeft -= move
    //     console.log(elemt.scrollLeft)
    //     if (elemt.scrollLeft <= move) setLeft(true)
    //     setRight(false)
    // }


    return (
        <div className="container-0 bg-light" style={{ position: 'relative', zIndex: 5 }}>
            <div className=" text-center text-muted py-4 px-2" style={{ fontSize: media.desktop ? 18 : 13, position: 'relative', zIndex: 5 }}>
                <span className="font-weight-bold">Choose your passion!</span>
                <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet,</p>
            </div>

            <div id="box" style={{ overflow: media.mobile ? 'auto' : 'hidden', scrollBehavior: 'smooth' }}>
                <Slider {...settings}>
                    <div className="d-flex " >
                        <div className="col-4">
                            <Link to={route.burger}> <BurgerType img={bg1} title={"vegetables"} media={media} /> </Link>
                        </div>
                        <div className="col-4">
                            <Link to={route.burger}>  <BurgerType img={bg2} title={"barbeque"} media={media} /></Link>
                        </div>
                        <div className="col-4">
                            <Link to={route.burger}>  <BurgerType img={bg3} title={"double chesse"} media={media} /></Link>
                        </div>

                    </div>
                </Slider>

            </div>
            {/* {
                (media.desktop || media.tablet) &&
                <div className="d-flex justify-content-between position-relative" style={{ top: -140 }}>
                    <i id="rightArrow" className="fa fa-chevron-circle-left"
                        onClick={LeftButton}
                        onMouseOver={e => document.getElementById('rightArrow')}
                        onMouseOut={e => document.getElementById('rightArrow')}
                    />
                    <i id="leftArrow" className="fa fa-chevron-circle-right"
                        onClick={RightButton}
                        onMouseOver={e => document.getElementById('leftArrow')}
                        onMouseOut={e => document.getElementById('leftArrow')}
                    />
                </div>
            } */}
        </div>
    )
}

const BurgerType = ({ img, title, media }) => {
    return (
        // ,height:  media.desktop ? '89%' :'90%'
        <div className="hovereffect " style={{ cursor: 'pointer', objectFit: 'contain', height: media.desktop ? '89%' : '90%' }} >
            <img className="img-fluid" src={img} alt="burger-category" />
            <div className="overlay">
                <h2>{title}</h2>
            </div>

        </div>
    )
}

export default withMedia(CardItem)