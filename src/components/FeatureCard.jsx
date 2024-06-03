import React from 'react'
import styles from '../styles'

const FeatureCard = ( {icon, title, content} ) => {
  return (
    <div className={`flex flex-row p-6 rounded-2xl feature-card`}>
        <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt={title} className='w-1/2 h-1/2 object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-semibold text-[18px] leading-[23px]'>{title}</h4>
            <p className='text-dimWhite leading-[24px]'>{content}</p>
        </div>
    </div>
  )
}

export default FeatureCard