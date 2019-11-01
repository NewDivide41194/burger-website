import React from 'react'
import BurgerLogo from '../../assets/icons/Burger'
import * as Colors from '../../config/color.config'
import { withMedia } from 'react-media-query-hoc'

const Footer = props => {
    const {media}=props
    return (
        <div className='container-fluid py-4'>
        <div className='container text-light' style={{ fontSize: media.mobile ? 12 :14, textAlign: 'left'}}>
            <div className='row' style={{ paddingBottom: `${window.innerWidth <= 991 ? '10px' : '200px'}`, borderBottom: `1px solid ${Colors.Price}` }}>
                <div className='col-lg-4 py-2'>
                    <div style={{ height: '60px' }}>
                        <BurgerLogo width={'50px'} height={'50px'} />
                    </div>
                    <div style={{ lineHeight: '25px', textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed diam nonummy nibh euismod aliquet vel illum dolore eu feugiat nulla facilisis
                   </div>
                </div>

                <div className='col-lg-4 py-2' style={{ fontFamily: 'Volkhov' }}>
                    <div style={{ height: '60px', lineHeight: '50px', color: `${Colors.Price}` }}>
                        WHERE TO FIND US
                    </div>
                    <table>
                        <tbody>
                            <tr style={{ height: '30px' }}><td style={{ width: '30px' }}><i className="fas fa-map-marker-alt text-warning" /></td><td>198 West 21th Street, Suite 721</td></tr>
                            <tr style={{ height: '30px' }}><td><i className="fas fa-envelope text-warning" /></td><td>mail@qodeinteractive.com</td></tr>
                            <tr style={{ height: '30px' }}><td><i className="fas fa-phone-alt text-warning" /></td><td>198 West 21th Street, Suite 721</td></tr>
                        </tbody>

                    </table>
                </div>

                <div className='col-lg-4 py-2' style={{ fontFamily: 'Volkhov' }}>
                    <div style={{ height: '60px', lineHeight: '50px', color: `${Colors.Price}` }}>
                        WHERE TO FIND US
                    </div>
                    <input className='form-control mb-3' style={{ height: '40px', border: `1px solid ${Colors.Price}` }} />
                    <button className='btn btn-warning w-100 text-dark' style={{ height: '40px' }}>SUBMIT</button>
                </div>
            </div>
            <div style={{ textAlign: 'center', padding: '10px' }}>© Copyright Qode Interactive. This demo is part of the Bridge theme</div>
        </div>    
        </div>
        
    )
}

export default withMedia(Footer)