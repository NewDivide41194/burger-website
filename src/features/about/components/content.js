import React from 'react'
import { withMedia } from 'react-media-query-hoc'

const AboutContentContainer = props => {
    const { media } = props
    return (
        <div className="p-4">
            <div className="text-center font-weight-bold" style={{ fontWeight: 300, fontSize: media.desktop ? 30 : media.tablet ? 25 : 18 }}>
                <h2> Have it your way</h2>
            </div>
            <blockquote>
                <p className="text-justify px-4" style={{ lineHeight: 1.8, fontSize:media.desktop ? 18 : media.tablet ? 16 : 14 , fontStyle: 'bold' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
                </p>
            </blockquote>
        </div>
    )
}

export default withMedia(AboutContentContainer);