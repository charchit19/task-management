# Task Management App

A simple and efficient Task Management application built with Next.js. This app allows users to create, read, update, and delete tasks while also providing features like task filtering, sorting by priority, and local storage persistence.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Create, Read, Update, and Delete (CRUD)**: Manage tasks easily with full CRUD operations.
- **Search Functionality**: Filter tasks by title or description.
- **Priority Sorting**: Sort tasks based on their priority (High, Medium, Low).
- **Persistent Storage**: Uses local storage to persist tasks between page reloads.
- **Responsive Design**: Fully responsive layout that works on various screen sizes.

## Tech Stack

- **Frontend**: Next.js (React framework)
- **Styling**: CSS
- **State Management**: React Hooks
- **Local Storage**: For data persistence

## Installation

To get started with the Task Management App, follow these steps:

### Step 1: Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone https://github.com/yourusername/task-management-app.git
```

### Step 2: Navigate to the Project Directory

Change your directory to the cloned repository:

```bash
cd task-management-app
```

### Step 3: Install the Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### Step 4: Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

### Step 5: Open the Application
Open your web browser and go to http://localhost:3000 to view the application.

## Usage

- Upon loading the app, you will see a title and a task form to add new tasks.
- Fill in the task title, description, and select a priority before clicking the "Add Task" button.
- Use the search bar to filter tasks by title or description.
- Tasks are displayed with options to mark them as completed or delete them.
- The task list will persist between page reloads due to local storage functionality.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please open an issue or submit a pull request.