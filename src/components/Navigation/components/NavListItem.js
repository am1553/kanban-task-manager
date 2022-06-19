import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

function NavListItem({ title, set_board, board, nav, set_board_nav }) {

  const iconStyle = {
    fontSize: '1rem', 
    marginRight: '0.5rem', 
    opacity: '0.6'
  }
  const iconStyleActive = {
    fontSize: '1rem', 
    marginRight: '0.5rem',
    opacity: '1',
    color: '#fff'
  }

  return (
    <li 
      className='nav_panel__list_item' 
      onClick={ () => { set_board(title); set_board_nav(!nav) } } 
      style={ title === board ? { backgroundColor: '#635FC7', color: '#fff' } : undefined }  
      >
        <DashboardIcon style={ title === board ? iconStyleActive : iconStyle }/>
        <h3 style={ title === board ? { opacity: '1' } : { opacity: '0.5' } }>{title}</h3>
    </li>
  )
}

export default NavListItem