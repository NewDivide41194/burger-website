import React from 'react'

const LocationCard = () => {
    return (
        <div className='container bg-light'>
            <div className='row'>
                {LocationData.map((v, k) =>
                    <div className='col-lg-3 text-center py-3' key={k}>
                        <i className="fa fa-map-marker-alt fa-7x" style={{ color: 'gold' }} />
                        <h1 className='py-3'>{v.name}</h1>
                        <h4>{v.address}</h4>
                        <h5>{v.phone}</h5>
                    </div>
                )}
            </div>
        </div>
    )
}

export default LocationCard

const LocationData = [
    {
        name: 'Brooklyn',
        address: '231 Hudson St, New York, NY 10013',
        phone: '+001 212-342-7000'
    },
    {
        name: 'Brooklyn',
        address: '231 Hudson St, New York, NY 10013',
        phone: '+001 212-342-7000'
    },
    {
        name: 'Brooklyn',
        address: '231 Hudson St, New York, NY 10013',
        phone: '+001 212-342-7000'
    },
    {
        name: 'Brooklyn',
        address: '231 Hudson St, New York, NY 10013',
        phone: '+001 212-342-7000'
    },
]