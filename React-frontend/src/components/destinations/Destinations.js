import React from 'react'
import './DestinationsStyles.css'

import Andam from '../../assets/Andam.jpg'
import Ramesh from '../../assets/Ramesh.jpg'
import Puri from '../../assets/Puri.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Indian's Best Beaches</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={Andam} alt="/"/>
                    <img src={Ramesh} alt="/"/>
                    <img src={Puri} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
