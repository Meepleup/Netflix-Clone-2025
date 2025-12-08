import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import netflixlogo from '../../assets/images/netflixlogo.png'

const Header = () => {
    return (
    <div className="outer_header_container">
        <div className="header_container">
            <div className="header_left">
    <ul>
        <li><img src={netflixlogo} alt="netflix logo"  width='100' />
        </li>
      <li>Home</li>
      <li>Series</li>
      <li>Films</li>
      <li>Games</li>
      <li>New & Popular</li>
      <li>My List</li>
      <li>Browse by Languages</li>
    </ul>
  </div>
  <div className="header_right">
    <ul>
      <li><SearchIcon/></li>
      <li><NotificationsNoneIcon/></li>
      <li><AccountBoxIcon/></li>
      <li><ArrowDropDownIcon/></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Header