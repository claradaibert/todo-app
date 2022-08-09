import * as Style from './style';
import{ GlobalStyle } from './style/global';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';
import TaskBox from './components/taskBox';
import DataBox from './components/dataBox';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Style.Container>
          <Style.Header>toDo</Style.Header>
          <Style.Body>
            <Style.LeftContainer>
              <Style.DataContainers>
                <DataBox
                  icon={"M"}
                  title={"2"}
                  text={"Tarefas concluídas"}
                />
                <DataBox
                  icon={"M"}
                  title={"2"}
                  text={"Tarefas a completar"}
                />
              </Style.DataContainers>
            </Style.LeftContainer>
            <TaskBox></TaskBox>
          </Style.Body>
        </Style.Container>
      </ThemeProvider>
    </>
  );
}

export default App;
