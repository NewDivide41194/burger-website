import React, { useEffect, useState } from 'react'

const ToTop = () => {
    const _handleTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    const [yAxis, setYaxis] = useState(0)
    useEffect(() => {
        const handleResize = () => setYaxis(window.pageYOffset);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })
    return (
        <div className='row justify-content-end text-light' >
            {yAxis === 0 ||
                <div className='position-fixed' style={{ zIndex: 3, paddingRight: 20, marginTop: 500, cursor: 'pointer' }} onClick={_handleTop}>
                    <i className="fa fa-arrow-circle-up fa-4x" style={{ textShadow: '2px 2px 5px gray' }} />
                </div>
            }

        </div>
    )
}

export default ToTop