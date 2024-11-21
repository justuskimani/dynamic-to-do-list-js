// Listen for the DOMContentLoaded event to ensure the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        // Step 1: Retrieve the input field value and trim it
        const taskInput = document.getElementById("taskInput"); // Replace with your input's id
        const taskText = taskInput.value.trim(); // Remove leading/trailing whitespace
    
        // Step 2: Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Alert the user if the input is empty
            return; // Exit the function
        }
    
        // Step 3: Add the task to the list
        const taskList = document.getElementById("taskList"); // Replace with your list's id
        const listItem = document.createElement("li"); // Create a new list item
        listItem.textContent = taskText; // Set the text of the list item
    
        // Step 4: Append the new task to the list
        taskList.appendChild(listItem);
    
        // Step 5: Clear the input field
        taskInput.value = "";
    }