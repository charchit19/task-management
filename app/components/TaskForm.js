import { useState } from 'react'; // Import necessary hook from React

const TaskForm = ({ setTasks }) => {
  // State to manage the form inputs: title, description, and priority
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  // Function to handle task submission and add a new task to the list
  const addTask = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new task object
    const newTask = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      title,
      description,
      priority,
      completed: false, // Default new task to incomplete
    };

    // Update the task list state by appending the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Reset the form fields after submitting
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={addTask} className="task-form">
      {/* Input field for task title */}
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
      />
      
      {/* Textarea for task description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />

      {/* Dropdown to select task priority */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {/* Button to submit the form and add the task */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
