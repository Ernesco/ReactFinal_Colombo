import React from 'react'
import Style from '../Style/style.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={Style.footer}>
        <Link to='/'><img src="https://i.postimg.cc/SK6CZfF6/logoUma.png" alt="" className={Style.navguia}/></Link>
      <div >
        <img src="https://i.postimg.cc/SNFdY3mw/Instagram.png" alt="" className={Style.enlaces}/>
        <img src="https://i.postimg.cc/Twc2qfm8/facebook.png" alt="" className={Style.enlaces}/>
      </div>
      </div>
    </footer>
  )
}

export default Footer