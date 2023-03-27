import React from 'react'
import './css/Header.css'
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
// import {img1} from './images/download.png';
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className='header-left'>
          <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt="Logo" />
          </Link>
          {/* Method : import not working */}
          {/* <img src={img1} alt="" /> */}
          {/* Method 1: copy address */}
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrDreQZnP2-lYy5t1IiCMOKUoJTtAyO3d2g&usqp=CAU" alt="" /> */}
          {/* Method 2: in public folder */}
          {/* <img src={process.env.PUBLIC_URL + "/discussion.png"} alt="logo" /> */}
          {/* Method 3: craete images folder in public and then add image */}
          {/* <img src={process.env.PUBLIC_URL + "./images/download.png"} alt="logo" /> */}
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type='text' placeholder='Search...' />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Avatar />
            <InboxIcon />
            <svg
              aria-hidden="true"
              class="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header

