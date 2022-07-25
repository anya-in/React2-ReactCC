import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Business Appointment',
        day: ' August 2nd at 2:30 p.m.',
        reminder: 'true'
      },
      {
        id: 2,
        text: 'Meeting',
        day: ' August 3rd at 8:30 a.m.',
        reminder: 'true'
      },
      {
        id: 3,
        text: 'Shopping',
        day: ' August 5th at 12:30 p.m.',
        reminder: 'false'
      }
    ]
  );

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
