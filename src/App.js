import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks, setTasks] = useState(
    [{
        id: 1,
        text: 'doctors',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    
    },
    {
        id: 2,
        text: 'study',
        day: 'Feb 5th at 10:30am',
        reminder: true,
    
    }]
)

//  Delete Task 
    const deleteTask = (id) => {
      console.log("Delete", id)
      setTasks(tasks.filter((task) => task.id !==id))
    }

// Toggle Reminder 
    const toggleReminder = (id) => {
      console.log("Toggle", id)
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
    }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} onToggle= {toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
