import React, { useState } from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className='header'>
        <img src='https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png' className='JioStar' alt='JioStar Logo' />
        <div className='icons'>
          <a href='/' className='icon1'>
            <img src='./icons/home.png' className='icon1' alt='Home' /><span className='icon-text'>Home</span>
          </a>
          <a href='' className='icon2'>
            <img src='./icons/search.png' className='icon2' alt='Search' /><span className='icon-text'>Search</span>
          </a>
          <a href='' className='icon3'>
            <img src='./icons/tv.png' className='icon3' alt='TV' /><span className='icon-text'>TV</span>
          </a>
          <a href='' className='icon4'>
            <img src='./icons/popcorn.png' className='icon4' alt='Movies' /><span className='icon-text'>Movies</span>
          </a>
          <a href='' className='icon5'>
            <img src='./icons/run.png' className='icon5' alt='Sports' /><span className='icon-text'>Sports</span>
          </a>
          <a href='' className='icon6'>
            <img src='./icons/video.png' className='icon6' alt='Sparks' /><span className='icon-text'>Sparks</span>
          </a>
          <a href='' className='icon7'>
            <img src='./icons/application.png' className='icon7' alt='Categories' /><span className='icon-text'>Categories</span>
          </a>
          <a href='' className='icon8'>
            <img src='./icons/profile-user.png' className='icon8' alt='My Space' /><span className='icon-text'>MySpace</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
