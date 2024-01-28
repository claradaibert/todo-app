import {ThemeProvider} from 'styled-components';
import { ToastContainer } from 'react-toastify';

// Style import
import{ GlobalStyle } from './style/global';
import theme from './style/theme';

// Util import
import { toastConfig } from './utils/toastConfig';

import MainPage from './pages/MainPage';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer {...toastConfig} />
        <GlobalStyle/>
        <MainPage/>
      </ThemeProvider>
    </>
  );
}

export default App;
