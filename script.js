// Listen for the DOMContentLoaded event to ensure the HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
// Function to add a new task
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

    // Step 4: Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove"; // Set button text
    removeButton.className = "remove-btn"; // Add a class to the button

    // Step 5: Assign onclick event to the remove button
    removeButton.onclick = function () {
        taskList.removeChild(listItem); // Remove the list item from the task list
    };

    // Step 6: Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Step 7: Append the list item to the task list
    taskList.appendChild(listItem);

    // Step 8: Clear the input field
    taskInput.value = "";
}

// Add an event listener to the Add button
document.getElementById("addButton").addEventListener("click", addTask); // Replace with your button's id

// Add an event listener to the task input for the 'keypress' event
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") { // Check if the 'Enter' key was pressed
        addTask();
    }
});
	
