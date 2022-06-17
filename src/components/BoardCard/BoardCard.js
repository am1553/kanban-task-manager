import React, { useContext } from 'react'
import ThemeContext, { themes } from '../../styles/theme-context'

function BoardCard({title, subtasks}) {

    const cardTheme = themes.isTheme === 'light' ? themes.subLight : themes.subDark;

    const cardStyle = {
        backgroundColor: cardTheme.backgroundColor,
        color: cardTheme.color,
        width: '17.5rem',
        height: '5.5rem',
        padding: '1.5rem 1rem',
        borderRadius: '1rem',
    }

  return (
    <div 
      className='board__card' 
      style={ cardStyle } >
        <h3>{ title }</h3>
        <p className="p_medium" >{ subtasks }</p>
    </div>
  )
}

export default BoardCard