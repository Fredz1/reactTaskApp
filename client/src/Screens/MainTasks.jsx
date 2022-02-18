import { useEffect, useState, useCallback } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// Component imports
import TaskItem from '../components/TaskItem'
import NewTaskInput from '../components/NewTaskInput'
import SidePanel from "../components/SidePanel"

const MainTasks = () => {

  const navigate = useNavigate()

  const [taskList, setTaskList] = useState([])

  /* 
    @desc: if user jwt does not authenticate user will get sent to Login.
    @desc: call is made whenever setTasklist is run
    @desc: Put in useCallback hool to prevent uneccercary requests when page rerenders
  */
  const getData = useCallback( async () => {
    const { data } = await axios.get(
      '/api/tasks/retrieve'
    )
    data[0] === 'redirect to home' ? 
      navigate('/login')
      :
      setTaskList([...data])
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setTaskList]
  )

  /* 
    @desc: logout client and handle any problems if log out failes.
  */
  const logout = async () => {
    const { data } = await axios.get(
      'api/user/logout'
    )
    data === 'confirmed' ? navigate('/') : alert('problem logging you out')
  }

  // make inital request when page is loaded
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    
    <div className="mainTaskContainer">
      <SidePanel logout={logout} />

      <h2 className="mainTaskHeading">Tasks</h2>
      
      {/* 
        Task area renders all tasks if request is not empty or unreadable
      */}
      <div className="MainTaskArea">
        <NewTaskInput setTaskList={setTaskList} />
        <div className="MainTaskList">
          {
            taskList !== [] ? 
            taskList.map(
              (el, index) => {
                return(
                  <TaskItem element={el} key={index} setTaskList={setTaskList} />
                )
              }
            )
            :
            'no tasks for now'
          }
        </div>
      </div>


    </div>
    
  )
}

export default MainTasks
