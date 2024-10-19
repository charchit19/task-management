import { useState, useEffect } from 'react'; // Import necessary hooks from React
import TaskList from '../app/components/TaskList'; // Import TaskList component
import TaskForm from '../app/components/TaskForm'; // Import TaskForm component
import "../css/globals.css"; // Import global styles
import Head from 'next/head';

export default function Home({ initialTasks }) {
    // State to manage tasks and the search term
    const [tasks, setTasks] = useState(initialTasks);
    const [searchTerm, setSearchTerm] = useState('');

    // Load tasks from localStorage on initial render
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks)); // Parse and set tasks from localStorage
        }
    }, []);

    // Save tasks to localStorage whenever the tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Store the tasks as a string
    }, [tasks]);

    // Sort tasks based on priority (high -> medium -> low)
    const sortedTasks = tasks.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    // Filter tasks by search term (title or description)
    const filteredTasks = sortedTasks.filter(
        (task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Task Management App</title> {/* Set the page title here */}
                <meta name="description" content="Manage your tasks efficiently with our task management application." /> {/* Optional meta description */}
            </Head>
            <div className="container">
                <h1>Task Management App</h1>

                <div className="search-task-container">
                    {/* Search input for filtering tasks */}
                    <input
                        type="text"
                        placeholder="Search tasks by title or description"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-bar"
                    />
                    <TaskForm setTasks={setTasks} /> {/* Task form for adding new tasks */}
                </div>

                {/* Priority legend to explain task color coding */}
                <div className="priority-legend">
                    <div className="legend-item">
                        <span className="legend-color high"></span> High Priority
                    </div>
                    <div className="legend-item">
                        <span className="legend-color medium"></span> Medium Priority
                    </div>
                    <div className="legend-item">
                        <span className="legend-color low"></span> Low Priority
                    </div>
                </div>

                {/* Display the filtered and sorted task list */}
                <TaskList tasks={filteredTasks} setTasks={setTasks} />
            </div>
        </>
    );
}

// Server-side logic to load initial tasks
export async function getServerSideProps() {
    // Example initial task data
    const initialTasks = [
        { id: 1, title: 'Task 1', description: 'Organize team meeting to discuss project milestones and deliverables for the upcoming sprint.', priority: 'high', completed: false },
        { id: 2, title: 'Task 2', description: 'Create a detailed report on user feedback from the last product launch to identify areas for improvement.', priority: 'medium', completed: false },
        { id: 3, title: 'Task 3', description: 'Research and analyze competitor products to benchmark features and pricing strategies for our next release.', priority: 'low', completed: false },
    ];


    return {
        props: {
            initialTasks, // Pass the initial tasks as props to the Home component
        },
    };
}
