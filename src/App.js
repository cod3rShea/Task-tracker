import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'docs appointment',
        day: 'Feb 5th',
        reminder: true
    },
    {
        id: 2,
        text: 'Work',
        day: 'Feb 12th',
        reminder: true
    }
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks( tasks.filter( (task) => task.id !== id) )
  }

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks( 
      tasks.map((task) => 
        task.id === id ? {...task, reminder: 
        !task.reminder } : task 
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
          'No Task to show'
      )}
    </div>
  );
}

export default App;
