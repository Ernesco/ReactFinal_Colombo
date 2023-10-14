import React from 'react'
import Style from '../Style/style.module.css';

const Footer = () => {
  return (
    <div className={Style.footer}>
      <h5>Uma Blanqueria</h5>
    <div >
      <img src="https://i.postimg.cc/SNFdY3mw/Instagram.png" alt="" className={Style.enlaces}/>
      <img src="https://i.postimg.cc/FzB4DRH6/tik-tok.png" alt="" className={Style.enlaces}/>
      <img src="https://i.postimg.cc/Twc2qfm8/facebook.png" alt="" className={Style.enlaces}/>
    </div>
    </div>
  )
}

export default Footer