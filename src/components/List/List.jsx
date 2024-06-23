import {useState} from 'react'
import { FiTrash2, FiPlus, FiAlignCenter } from 'react-icons/fi'
import './list.styles.css'

const List = () => {
    const [list, setList] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask(){
        const task = {
            id: Math.random(),
            title: newTask,
            isComplete: false
        }

             if(task.title === ''){
                 return 
              }

              setList([...list, task])
              setNewTask('')
    }

    function handleToggleTaskCompletion(id) {
      const newTasks = list.map(task => task.id === id? {
        ...task,
        isComplete: !task.isComplete,
      }: task)

      setList(newTasks)

    }

    function handleDeleteTask(id){
      const taskFiltered = list.filter(task => task.id !== id)
      setList(taskFiltered)
    }

    return(
        <section className='list'> 
          <header>         
            <h1>Camila Abreu</h1>
            <h2>Lista de Tarefas</h2>
            <p>Camila é uma figura notável quando se trata <br></br> de organização. Sua abordagem meticulosa e <br></br>focada em resultados é evidente em todos os<br></br> projetos que ela lidera. Seja no âmbito profissional ou<br></br> pessoal, Camila é conhecida por sua capacidade de <br></br>estruturar tarefas complexas em etapas claras e <br></br>alcançáveis, o que não apenas simplifica o processo, <br></br>mas também maximiza a eficiência.</p>
            
            <div className='links'>
               <a href="#">Link 1</a><br></br>
               <a href="#">Link 2</a><br></br>
               <a href="#">Link 3</a><br></br>
               <a href="#">Link 4</a><br></br>
            </div>

            
            <div className='input-container'>
               <input 
                  type='text'
                  placeholder='Adicionar nova tarefa'
                  onChange= {e => setNewTask(e.target.value)}
                  value={newTask}
               />
               <button className='add-task' data-testid='add-task' onClick={handleCreateNewTask}>
                   <FiPlus size={16} color='white' />
               </button>
            </div>
          </header>

          <main>
             <ul>
               {
                 list.map(task =>
                  <li key={task.id}>
                     <div data-testid='task' className={task.isComplete? 'completed': ''}
>
                          <label className='checkbox-container'>
                              <input 
                                  type='checkbox'
                                  onClick={() => handleToggleTaskCompletion(task.id)}
                                  checked={task.isComplete}
                                  readOnly
                               />
                             <span className='checkmark'></span>
                          </label>
                          <p>{task.title}</p>
                      </div>
                      <button className='remove-task' data-testid='remove-task' onClick={() => handleDeleteTask(task.id)}>
                         <FiTrash2 size={16}/>
                      </button>
                  </li>
                 )
               }
             </ul>
          </main>
        </section>
    )
}

export default List