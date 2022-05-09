import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Buy Groceries", priority: "high" },
    { name: "Clean Bathroom", priority: "low" },
    { name: "Get Car Repaired", priority: "high" },
    { name: "Get the Radio Button to Work", priority: "high"}
  ])

  const [newTask, setNewTask] = useState
    ()

  const completeTask = ((index) => {
    const copyTasks = [... tasks]
    copyTasks[index].isCompleted = true
    setTasks(copyTasks)
  })

  const itemNodes = tasks.map((task, index) => { 
    return(
        <li key={index} className={task.isCompleted ? "completed" : "not-completed"}>
        <span>{task.name}</span>
        <span>Priority: {task.priority}</span>
        {task.isCompleted ? <span className="completed">Completed!</span> : <button onClick={() => completeTask(index)}>Push to Complete</button>}</li> 
    )
    })

    const handleTaskInput = (event) => {
      setNewTask(event.target.value)
      // setNewPriority(event.target.value)
    }

    const saveNewTask = ((event) => {
      event.preventDefault()
      const copyTask = [... tasks]
      copyTask.push({name: newTask, priority: "",
      isCompleted: false})
      setTasks(copyTask)
      setNewTask(newTask)  
    })

  return (
    <div className="App">

      <h1>To-Do List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewTask}>
      <label htmlFor="new_task" type="text">Add a New Task:</label>
      <input id="new-task" type="text"
      onChange={handleTaskInput} value =
      {newTask}/>
        <label htmlFor="high_priority" type = "radio">High Priority</label> 
        <input type="radio" name="priority" id="high"></input>
        <label htmlFor="low_priority" type = "radio">Low Priority</label>
        <input type="radio" name="priority" id="low"></input>
      <input type = "submit" value="Save New Task"/>
      </form>

    </div>
  );
}

export default App;
