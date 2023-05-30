import React from 'react'
import '../Footer/Footer.scss'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__text">
        Copyright ©2023 All rights reserved | This template is made with  by Colorlib
        </div>
        <div className="footer__icon">
            <div className="icon1">
<FacebookIcon/>
            </div>
            <div className="icon2">
<TwitterIcon/>
            </div>

            <div className="icon3">
<InstagramIcon/>
            </div>

            <div className="icon4">
<SportsBasketballIcon></SportsBasketballIcon>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
