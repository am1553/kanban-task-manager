import React, { useState, useContext } from 'react'
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage'
import ThemeContext from '../../styles/theme-context'
import PlatformLaunch from './PlatformLaunch/PlatformLaunch';

function Board() {

    const theme = useContext(ThemeContext);
    
    const [empty, setEmpty] = useState(false)

  return (
    <div className='board' style={theme}>

      {
        empty ? <EmptyMessage /> : undefined
      }

      <PlatformLaunch />
      
    </div>
  )
}

export default Board