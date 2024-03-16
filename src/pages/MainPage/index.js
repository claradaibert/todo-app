import { useState } from 'react';
import TaskBox from '../../components/taskBox';
import DataBox from '../../components/DataBox';
import AddTask from '../../components/addTask';
import {FaCheck} from 'react-icons/fa';
import {CgClipboard} from 'react-icons/cg';
import { Container } from './style';

function MainPage() {
    const [taskList, setTaskList] = useState([
      {
        title: 'Tarefa1',
        description: 'Preciso lavar meu peixe',
        done: false,
      },
      {
        title: 'Passear com o cachorro',
        description: '',
        done: false,
      },
      {
        title: 'Fazer exercício',
        description: 'Aula de aeróbica',
        done: false,
      }
    ]);
    const completedTasks = taskList.filter(task => task.done);
    const undoneTasksNumber = taskList.length - completedTasks.length;

    return (
        <Container>
          <div className='header'>toDo</div>
          <div className='pageBody'>
            <div className='leftContainer'>
              <div className='dataContainer'>
                <DataBox
                  icon={<FaCheck/>}
                  title={completedTasks.length}
                  text={"Tarefas concluídas"}
                />
                <DataBox
                  icon={<CgClipboard/>}
                  title={undoneTasksNumber}
                  text={"Tarefas a completar"}
                />
              </div>
              <AddTask
                taskList={taskList}
                setTaskList={setTaskList}
              />
            </div>
            <TaskBox
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
        </Container>
    )
}

export default MainPage;