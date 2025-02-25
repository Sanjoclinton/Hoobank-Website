import React from 'react'

const Button = ( {styles} ) => {
  return (
    <button className={`py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      Get Started
    </button>
  )
}

export default Button