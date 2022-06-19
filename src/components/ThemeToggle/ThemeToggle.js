import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { themes } from '../../styles/theme-context';

function ThemeToggle({set_theme}) {


    const themeToggleStyle = {
        height: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 1rem',
        borderRadius: '0.5rem'
    }

    const buttonToggleStyle = {
        backgroundColor: '#635FC7',
        width: '2.5rem',
        height: '1.25rem',
        border: 'none',
        borderRadius: '1rem',
        margin: '0 1rem',
        position: 'relative'
    }

    const commonCircleToggleStyle = {
        position: 'absolute',
        width: '0.875rem',
        height: '0.875rem',
        borderRadius: '50%',
        backgroundColor: '#fff',
        top: '50%',
        transform: 'translateY(-50%)',
        transition: 'all 300ms ease-in-out'
    }

    const circleToggleStyle = {
        left: '0.25rem'
    }

    const circleToggleStyleActive = {
        left: '1.35rem'
    }

  return (
    <div className='theme_toggle' 
        style={ themes.isTheme === 'light' ? {...themeToggleStyle, ...themes.light} : {...themeToggleStyle, ...themes.dark} }
    >
        <WbSunnyIcon style={ {opacity: '0.5' }}/>

        <button 
            style={ buttonToggleStyle } 
            onClick={ () => {
            themes.isTheme === 'light' ? set_theme('dark') : set_theme('light')
        } }>

            <div 
                className="circle" 
                style={ themes.isTheme === 'light' ? {...commonCircleToggleStyle, ...circleToggleStyle} : {...commonCircleToggleStyle, ...circleToggleStyleActive} }>    
            </div>
        </button>
        <NightsStayIcon style={ {opacity: '0.5' }}/>
    </div>
  )
}

export default ThemeToggle