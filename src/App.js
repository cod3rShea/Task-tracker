import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
