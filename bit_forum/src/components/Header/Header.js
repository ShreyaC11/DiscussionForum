import React from 'react'
import './css/Header.css'
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import {img1} from './images/download.png';
function Header() {
  return (
    <header>
      <div className="header-container">
        <div className='header-left'>
          <img src={img1} alt="" />
          
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

