import { useState } from 'react';
import { ThemeConsumer } from 'styled-components';
import ThemeContext, { themes } from './styles/theme-context'
import Header from './Components/Header/Header'
import EmptyMessage from './Components/EmptyMessage/EmptyMessage';
import Main from './routes/Main';
import Data from './data.json';
import BoardData, { data } from './Components/DataInformation/data-information';

function App() {

  const [theme, setTheme] = useState('dark')

  themes.isTheme = theme;

  const [board, setBoard] = useState('Platform Launch')

  let boardData;
  
  data.forEach(data => {
    if(data[1].name === board) {
      boardData = data
    }
  })


  return (
    
    <div className="App">
      <ThemeContext.Provider value={ theme === 'light' ? themes.light : themes.dark}>

          <Header set_board = { setBoard } board = { board } set_theme = { setTheme }/>
          <Main board_data = { boardData }/>

      </ThemeContext.Provider>
    </div>

  );
}

export default App;
