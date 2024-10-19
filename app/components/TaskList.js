import { useState } from 'react'; // Import necessary hook from React

const TaskList = ({ tasks, setTasks }) => {
  // Function to toggle the completion status of a task
  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task // Toggle the completed status
      )
    );
  };

  // Function to delete a task by its ID
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Filter out the task to be deleted
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task ${task.priority} ${task.completed ? 'completed' : ''}`}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div>
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'} {/* Toggle button text */}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button> {/* Delete task button */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
