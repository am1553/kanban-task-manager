import React, { useState } from 'react'
import { data } from '../DataInformation/data-information'
import NavListItem from './components/NavListItem'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { themes } from '../../styles/theme-context';

function NavPanel({ nav, set_board, board, set_theme, set_board_nav }) {

  const [counter, setCounter] = useState(data.length)




  return (
    <div className= { nav ? 'header__nav_panel header__nav_panel-active' : 'header__nav_panel' }
      style = { themes.isTheme === 'light' ? themes.subLight : themes.subDark }
    >


        <header>
            <h3>all boards ({ counter })</h3>
        </header>

        <nav>
          {
            data.map((item, key) => {
              return(
                <NavListItem
                  key = { item[0] }
                  title = { item[1].name }
                  set_board = { set_board }
                  board = { board }
                  set_board_nav = { set_board_nav }
                  nav = { nav }
                />
              )
            })
          }
        </nav>

        <div className="header__nav_panel__create_new_board">
          <DashboardIcon style={ {fontSize: '1rem', color: '#635FC7'} }/>

          <button>
            <AddIcon style={ {fontSize: '0.8rem', marginTop: '0.25rem'} }/>
            <h3>Create New Board</h3>
          </button>
        </div>

        <ThemeToggle set_theme = { set_theme }/>

    </div>
  )
}

export default NavPanel