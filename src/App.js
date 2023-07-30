import{ GlobalStyle } from './style/global';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';
import MainPage from './pages/MainPage';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <MainPage/>
      </ThemeProvider>
    </>
  );
}

export default App;
