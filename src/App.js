import * as Style from './style';
import { useState } from 'react';
import{ GlobalStyle } from './style/global';
import theme from './style/theme';
import {ThemeProvider} from 'styled-components';
import TaskBox from './components/taskBox';
import DataBox from './components/dataBox';
import AddTask from './components/addTask';
import {FaCheck} from 'react-icons/fa';
import {CgClipboard} from 'react-icons/cg'

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Style.Container>
          <Style.Header>toDo com test de push</Style.Header>
          <Style.Body>
            <Style.LeftContainer>
              <Style.DataContainers>
                <DataBox
                  icon={<FaCheck/>}
                  title={"2"}
                  text={"Tarefas concluídas"}
                />
                <DataBox
                  icon={<CgClipboard/>}
                  title={"2"}
                  text={"Tarefas a completar"}
                />
              </Style.DataContainers>
              <AddTask/>
            </Style.LeftContainer>
            <TaskBox></TaskBox>
          </Style.Body>
        </Style.Container>
      </ThemeProvider>
    </>
  );
}

export default App;
