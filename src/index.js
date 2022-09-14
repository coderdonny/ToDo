import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';

//Listens for click on the add task button and appends task form
const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', appendTaskForm);

//Listens for the dynamically created task form submit button and triggers the submit task form function
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('task-form-submit-button')) {
		submitTaskForm();
	}
});
