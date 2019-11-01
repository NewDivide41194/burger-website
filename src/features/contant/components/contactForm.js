import React from 'react'
import { withMedia } from 'react-media-query-hoc'

import BurgerImage from '../../../Images/burgerBackground/burger2.jpg'
import * as Colors from '../../../config/color.config'

const CommentForm = (props) => {
    const { media } = props
    return (
        <div className='container' style={{ backgroundImage: `url(${BurgerImage})`, color: 'white', padding: '20px', borderRadius: 10 }}>
            <div className='col-lg-6'>
                <span style={{ fontFamily: 'Volkhov', fontSize: 45 }}>Get In Touch</span>
                <h4 className='pb-5'>Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy summiel nibh</h4>
                <form>
                    <input className='form-control mb-4 text-light' style={{  fontSize: media.mobile ? 12 : 14, background: 'none', border: `1px solid ${Colors.Price}`, height: '40px' }} placeholder={'Name'} />
                    <input className='form-control mb-4 text-light' style={{  fontSize: media.mobile ? 12 : 14, background: 'none', border: `1px solid ${Colors.Price}`, height: '40px' }} placeholder={'Email'} />
                    <textarea className='form-control mb-4 text-light' style={{  fontSize: media.mobile ? 12 : 14, background: 'none', border: `1px solid ${Colors.Price}`, minHeight: '80px', maxHeight: '80px' }}
                        placeholder={'Message'} />
                    <button className='btn btn-warning w-100 text-light mb-4' style={{ fontSize: '16px' }}>SEND</button>

                </form>
            </div>

        </div>
    )
}

export default withMedia(CommentForm)