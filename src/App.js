import { useState, useContext } from "react";
import Header from "./components/Header/Header";
import Board from "./routes/Board/Board";
import ThemeContext, { themes } from "./styles/theme-context";

function App() {

  const [theme, setTheme] = useState('light')

  themes.isTheme = theme;


  return (
    <div className="App">
      <ThemeContext.Provider value={ theme === 'light' ? themes.light : themes.dark }>
        <Header />
        <Board 
          theme = { theme } 
          themeStyle = { theme === 'light' ? themes.subLight : themes.subDark }
        />

      </ThemeContext.Provider>
    </div>
  );
}

export default App;
