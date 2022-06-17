import React, { useContext } from 'react'
import ThemeContext, { themes } from '../../styles/theme-context'

function BoardCard({taskTitle, numberOfSubTasks, completedSubTasks}) {

    const cardTheme = themes.isTheme === 'light' ? themes.subLight : themes.subDark;

    const cardStyle = {
        backgroundColor: cardTheme.backgroundColor,
        color: cardTheme.color,
        width: '17.5rem',
        padding: '2rem 1rem',
        borderRadius: '1rem',
        marginBottom: '2rem',
        boxShadow: '6px 5px 10px -11px black, -2px 0 5px -5px black, 0 5px 10px -13px black'
    }

  return (
    <div 
      className='board__card' 
      style={ cardStyle } >
        <h3 style={ {marginBottom: '0.5rem'} }>{ taskTitle }</h3>
        <p className="p_medium" > { completedSubTasks } of { numberOfSubTasks } subtasks</p>
    </div>
  )
}

export default BoardCard