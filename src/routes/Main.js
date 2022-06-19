import React, { useState } from 'react'
import Board from '../Components/Board/Board'
import { themes } from '../styles/theme-context'


function Main({board_data}) {
    const body = document.getElementsByTagName('body')[0]
    const [cardExpansion, setCardExpansion] = useState(false)
    const overlayStyle = {
      position: 'absolute',
      minHeight: '100%',
      minWidth: '100%',
      left: '0',
      top: '4rem',
      bottom: '0',
      right: '0',
      backgroundColor: 'black',
      opacity: '0.5',
      zIndex: '5',
      display: cardExpansion ? 'block' : 'none'
    }

    return (
        <div className='main' style={ themes.isTheme === 'light' ? themes.light : themes.dark }>

          <div className="overlay" style={ overlayStyle } onClick={ () => {setCardExpansion(false); body.style.overflow = ''} }></div>

          <Board 
            board_data = { board_data }
            cardExpansion = {cardExpansion}
            setCardExpansion = {setCardExpansion}
          />
        </div>
  )
}

export default Main