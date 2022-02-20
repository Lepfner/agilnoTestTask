//React
import React from 'react'
//scss
import '../scss/selected.scss'

export default function selected({ selectedVal }) {

  return (
    <div>
      <img className='selectedPic' src={selectedVal.picture} alt="" />
    </div>
  )
}
