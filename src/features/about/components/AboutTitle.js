import React from 'react'
import { withMedia } from 'react-media-query-hoc'

import bg1 from '../../../Images/prettywoman.jpg'

const AboutTitle = props => {
    const { media } = props

    const bgstyle = {
        padding: ' 15%',
        backgroundImage: `url(${bg1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

        fontSize: media.desktop ? 22 : media.tablet ? 18 : 13

    }
    return (
        <div className=" text-dark text-center position-relative w-auto " style={bgstyle} >
            <h2 className="font-weight-bold">About Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                 Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
                 </p>
        </div>
    )
}

export default withMedia(AboutTitle)