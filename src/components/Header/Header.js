import React, { useState } from 'react'
import ChevDown from '../../assets/icon-chevron-down.svg'
import ChevUp from '../../assets/icon-chevron-up.svg'
import LightLogo from '../../assets/logo-light.svg'
import DarkLogo from '../../assets/logo-dark.svg'
import MobileLogo from '../../assets/logo-mobile.svg'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavPanel from '../Navigation/NavPanel'
import { themes } from '../../styles/theme-context'

function Header({ set_board, board, set_theme }) {

    const [boardNav, setBoardNav] = useState(false)


  return (

    <div className='header' style={ themes.isTheme === 'light' ? themes.subLight : themes.subDark } >

        <img src={ MobileLogo } alt="" className='header__mobile_logo' />
        
        <img src={ DarkLogo } alt="" className='header__desktop_logo' />

        <nav className='header__board_nav' onClick={ () => setBoardNav(!boardNav) }>
            <h1>Platform Launch</h1>
            <img src={ boardNav ? ChevUp : ChevDown } alt="" />
        </nav>

        <nav className='header__task_nav'>

            <button className='header__task_nav__add'>
                <AddIcon style={ { color: '#fff', fontSize: '1.25rem' } }/>
            </button>

            <button className='header__task_nav__menu'>
                <MoreVertIcon style={ themes.isTheme === 'light' ? themes.light : themes.dark }/>
            </button>

        </nav>

        <NavPanel 
            set_board = { set_board } 
            board = { board } 
            set_theme = { set_theme } 
            nav = { boardNav }
            set_board_nav = { setBoardNav } 
        />
        <div className="overlay" style={ boardNav ? { display: 'block' } : { display: 'none' } } onClick={ () => setBoardNav(false) }></div>
    </div>
  )
}

export default Header