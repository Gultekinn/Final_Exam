import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../Header/Header.scss'
const Header = () => {
  return (
    <div>


        <div className="navbar">
            <div className="navbar__right">
                <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="" />
            </div>
            <div className="navbar__left">
             <ul>
        <li><Link id='link' to="">Home</Link></li>
        <li><Link id='link' to="add">Add</Link></li>
        <li><Link id='link' to="wishlist"><FavoriteBorderIcon/></Link></li>
      </ul>    
            </div>
        </div>
     
    </div>
  )
}

export default Header
