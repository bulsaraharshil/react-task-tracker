import {
  useState
} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {

  const [tasks, setTasks] = useState([{
      id: 1,
      text: "Doctors Appointment",
      day: "Thurdsay",
      reminder: 'true'
    },
    {
      id: 2,
      text: "Parents Meeting",
      day: "Friday",
      reminder: 'false'
    },
    {
      id: 3,
      text: "Teachers Appointment",
      day: "Saturday",
      reminder: 'false'
    }
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task,
      reminder: !task.reminder
    } : task))
  }

  return (
     <div className = "container" >
      < Header title = "Task Tracker" / > 
      {
        tasks.length > 0 ? ( < Tasks tasks = {
            tasks
          }
          onDelete = {
            deleteTask
          }
          onToggle = {
            toggleReminder
          }
          />):('No Tasks to show')} 
          </div>
        );
      }



      export default App;