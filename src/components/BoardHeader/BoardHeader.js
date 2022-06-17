import React from 'react'

function BoardHeader({ title, count, circleColor }) {

    const headerStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        aligmItems: 'center',
        marginBottom: '2rem'
    }

    const circleStyle = {    
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        backgroundColor: circleColor,
        marginRight: '0.5rem'
    }



  return (
    <header className='board__header' style={headerStyle}>
        <div className="main__board__to_do__circle" style={circleStyle}></div>
        <h4>{title} ({count}) </h4>
    </header>
  )
}

export default BoardHeader