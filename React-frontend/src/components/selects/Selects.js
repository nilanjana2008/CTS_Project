import React from 'react'
import './SelectsStyles.css'

import Goa1 from '../../assets/Goa1.jpg'
import Havelock from '../../assets/Havelock.jpg'
import Marari from '../../assets/Marari.jpeg'
import Vizag1 from '../../assets/Vizag1.jpg'
import Puri1 from '../../assets/Puri1.jpg'
import Juhu from '../../assets/Juhu.jpg'
import Gokarana from '../../assets/Gokarana.jpg'
import Lakshyadweep from '../../assets/Lakshyadweep.jpg'
import Digha from '../../assets/Digha.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'



function Selects() {
    return (
        <div name='views' className='selects'>
            
            
            <div className='container'>
                
                <SelectsImg bgImg={Goa1} text='Goa' />

                <SelectsImg bgImg={Havelock} text='Havelock' />
                <SelectsImg bgImg={Marari} text='Marari' />
                <SelectsImg bgImg={Vizag1} text='Vizag' />
                <SelectsImg bgImg={Juhu} text='Juhu' />
                <SelectsImg bgImg={Puri1} text='Puri' />
                <SelectsImg bgImg={Gokarana} text='Gokarana' />
                <SelectsImg bgImg={Lakshyadweep} text='Lakshadweep' />
                <SelectsImg bgImg={Digha} text='Digha' />
            </div>
            

        </div>
    )
}

export default Selects
