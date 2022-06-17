import React, { useState } from 'react'
import Logo from '../../assets/logo-mobile.svg'
import LogoName from '../../assets/logo-dark.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import AddIcon from '@mui/icons-material/Add'
import { themes } from '../../styles/theme-context'

function Header({themeStyle}) {

    const [boardNav, setBoardNav] = useState(false)

  return (
    <div className='header' style={ themes.isTheme === 'light' ? themes.subLight : themes.subDark }>
        <div className="header__logo_wrapper">
            <img src={ Logo } alt="" className='mobile'/>
            <img src={ LogoName } alt="" className='desktop'/>
        </div>
        <div className="header__boards">
            <h1>Platform Launch</h1>
            <button onClick={ () => setBoardNav(!boardNav) }>
                {
                    boardNav ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> 
                }
            </button>
        </div>
        <div className="header__right_nav">
            <button className='add_icon'><AddIcon /></button>
            <button className='vert_icon'><MoreVertIcon style={ {color: '#828FA3'} } /></button>
        </div>
    </div>
  )
}

export default Header