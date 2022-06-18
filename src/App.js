import * as Style from './style';
import{ GlobalStyle } from './style/global';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Style.Container>
          <Style.Header>toDo</Style.Header>
        </Style.Container>
      </ThemeProvider>
    </>
  );
}

export default App;
