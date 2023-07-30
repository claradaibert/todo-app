import { useState } from 'react';
import TaskBox from '../../components/taskBox';
import DataBox from '../../components/dataBox';
import AddTask from '../../components/addTask';
import {FaCheck} from 'react-icons/fa';
import {CgClipboard} from 'react-icons/cg';
import * as Style from './style';

export default function MainPage() {
    const [taskList, setTaskList] = useState([]);

    return (
        <Style.Container>
          <Style.Header>toDo</Style.Header>
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
                  title={taskList.length}
                  text={"Tarefas a completar"}
                />
              </Style.DataContainers>
              <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
              />
            </Style.LeftContainer>
            <TaskBox></TaskBox>
          </Style.Body>
        </Style.Container>
    )
}