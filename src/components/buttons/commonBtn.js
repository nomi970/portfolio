import React from 'react'
import { Link } from 'react-router-dom'

function CommonBtn({text}) {
  return (
    <div>
      {/* <button type='button'>Let's Talk</button> */}
      <Link to="#" className='navbar__btn tab-content radius_50 font_Montserrat font_16_500'>
        {text}
      </Link>
    </div>
  )
}

export default CommonBtn
