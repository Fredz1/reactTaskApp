import axios from 'axios'

const TaskItem = ({ element, setTaskList}) => {
  
  /* 
    setTasklist with new information on request
  */
  const deleteTask = async item => {
    const { data } = await axios.post(
      'api/tasks/deleteTask',
      {
        item
      }
    )
    setTaskList(data)
  }

  return (
    <div className="card">
      &rarr;  {
        element
      }
      <button 
        className='buttonStyle' 
        onClick={() => deleteTask(element)}
      >
         &#10003; {/* html code for a tickmark */}
      </button>
    </div>
  )
}

export default TaskItem
