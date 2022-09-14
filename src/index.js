import './style.css';
import Task from './create-task';
import { appendTaskForm } from './append-task-form';
import { submitTaskForm } from './submit-task-form';

//Listens for click on the add task button and appends task form
const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', appendTaskForm);

//Listens for the dynamically created task form button and triggers the submit task form function
document.addEventListener('click', function (e) {
	if (e.target.classList.contains('task-form-submit-button')) {
		//retrieves form values from function for new Task creation
		let formValues = submitTaskForm();

		let title = formValues.title;
		let details = formValues.details;
		let date = formValues.date;

		const newTask = new Task(title, date, details);
		console.log(newTask);
	}
});

const taskList = document.querySelector('.task-list');

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('create-task-exit')) {
		// taskList.removeChild('create-task-li');
		// const newLi = document.querySelector('create-task-li');
		taskList.removeChild(taskList.lastChild);
		console.log('exit');
	}
});
