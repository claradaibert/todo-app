import { useState } from 'react';
import TaskBox from '../../components/taskBox';
import DataBox from '../../components/DataBox';
import AddTask from '../../components/addTask';
import {FaCheck} from 'react-icons/fa';
import {CgClipboard} from 'react-icons/cg';
import { Container } from './style';

function MainPage() {
    const [taskList, setTaskList] = useState([]);

    return (
        <Container>
          <div className='header'>toDo</div>
          <div className='pageBody'>
            <div className='leftContainer'>
              <div className='dataContainer'>
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
              </div>
              <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
              />
            </div>
            <TaskBox></TaskBox>
          </div>
        </Container>
    )
}

export default MainPage;