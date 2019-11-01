import React, { useEffect, useState } from 'react'
import { withMedia } from 'react-media-query-hoc'
import { Link } from 'react-router-dom'

import bg1 from '../../../Images/bgt.jpg'
import * as Colours from '../../../config/color.config'
import * as route from '../../../config/route.config'


const SingleItem = props => {
    const { media } = props
    var bgtextstyle = {
        display: 'inline-block',
        // backgroundColor: 'rgba(0,0,0,0.6)',
        // zIndex: 0,
        left: !media.mobile && '3%',
        // paddingTop: 10,
        color: 'white',
        //  bottom: '100px',
        // padding: '10px',
        borderRadius: 5,
        textAlign: 'center',
        marginTop: !media.mobile && '5%',
    }
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return (
        <div className=''>

            <div className='bg-dark' style={{ marginBottom: `${width <= 991 ? '580px' : '630px'}`, zIndex: 2, position: 'relative' }}>
                <div style={{ fontSize: media.desktop ? 20 : media.tablet ? 16 : 10 }}>
                    <img src={bg1} alt="single-burger" className="img-fluid position-relative" />
                    <div className={`border position-absolute  p-4  ${media.mobile && 'm-5'} `} style={bgtextstyle}>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br /> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam<br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br /> sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                     sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
                  </p>
                    </div>
                </div>

                {/* ======================================================================================================== */}
                <div className="d-flex justify-content-between align-items-center p-5" style={{ fontSize: media.desktop ? 25 : 15 }}>
                    <div><span className="font-weight-bold text-center text-light"> Are you ready to order? </span></div>
                    <Link to={route.contant} style={{ textDecoration: 'none' }}>
                        <div className="d-block  text-center  px-4 py-3"
                            style={{ borderRadius: 5, background: Colours.orangeRed, color: Colours.white, cursor: 'pointer' }}>
                            <span >contact us </span>
                        </div>
                    </Link>
                </div>

            </div >
        </div>

    )
}
export default withMedia(SingleItem);