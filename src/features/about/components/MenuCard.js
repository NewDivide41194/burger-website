import React from 'react'
import * as Colors from '../../../config/color.config'

const MenuCard = props => {
    const { title } = props
    return (
        <div className="container-fluid">
                <div className="py-5 px-4 w-100">
                    <div style={{ width: '100%',color:`${Colors.textBrown}` }}>
                        <p className='pb-4' style={{ fontWeight: 500, fontSize: 40, fontStyle: 'bold', textAlign: 'center', fontFamily: 'PT Serif, serif' }}>{title}</p>
                        {props.children}
                    </div>
                </div>
        </div>
    )
}
export default MenuCard;
