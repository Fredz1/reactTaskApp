import { useState } from "react"
import axios from 'axios'

/* 
  setTaskList destructured from props inorder to update list if request is successful
*/
const NewTaskInput = ({ setTaskList }) => {

  const [taskName, setTaskName] = useState('')

  const addTask = async () => {
    const { data } = await axios.post(
      '/api/tasks/addTask',
      {
        taskName
      }
    )
    if(data){
      setTaskList(data)
    }
  }

  /* 
    Desc: listen for user to Enter key
  */
  const enterPress = e => {
    if (e.key === 'Enter') addTask()
  }


  return (
    <div className="inputContainer">

      <input 
        placeholder="Task" 
        onKeyPress={e => enterPress(e)} 
        type="text" value={taskName} 
        onChange={ e => setTaskName(e.target.value)}
      />

      <button 
        className="buttonStyle" 
        onClick={ () => addTask()}
      >
        Add
      </button>
    </div>
  )
}

export default NewTaskInput
