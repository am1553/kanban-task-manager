import React from 'react'
import { themes } from '../../../../styles/theme-context'

function BoardHeader({ board_header, task_count, circle_color }) {

    

    const columnHeaderStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2rem 1rem',
        minWidth: '19.75rem'
    }

    const circleStyle = {
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: circle_color,
        marginRight: '0.5rem'
    }

  return (
    <div 
        className='main__board__board_column__header' 
        style={ themes.isTheme === 'light' ? {...columnHeaderStyle, ...themes.light} : {...columnHeaderStyle, ...themes.dark} }>
        <div className="circle" style={ circleStyle }></div>
        <h4 style={ {textTransform: 'uppercase'} }>{ board_header }({ task_count })</h4>
    </div>
  )
}

export default BoardHeader