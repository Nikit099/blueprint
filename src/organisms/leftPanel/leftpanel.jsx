import React, { useState } from 'react'
import NavigationButton from '../../atoms/buttons/leftpanelbutton'
import Nodelist from '../../molecules/lists/nodesAndSamples/nodelist'
import nodeIcon from './nodes.svg'
import sampleIcon from './samples.svg'
import styles from './leftpanel.module.css'

const Leftpanel = () => {

    const [isActive, setActive] = useState('nodes')

  return (
    <div className={styles.panel}>
        <div className={styles.navigation}>
            <NavigationButton 
                icon={nodeIcon} 
                onClick={() => setActive('nodes')} 
                text='Ноды' 
                isActive={isActive==='nodes' ? true : false}
            />
            <NavigationButton 
                icon={sampleIcon} 
                onClick={() => setActive('samples')} 
                text='Шаблоны' 
                isActive={isActive==='samples' ? true : false}
            />
        </div>
        <div className={styles.lists}>
            <Nodelist type={isActive}/>
        </div>
        
    </div>
  )
}

export default Leftpanel
