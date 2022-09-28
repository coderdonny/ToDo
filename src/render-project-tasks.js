import { allTasks } from '.';
import appendTaskAddButton from './append-add-task-button';
import createTaskLi from './create-task-DOM';

export default function renderProjectTasks(array) {
	//sorts tasks by closest due date
	array.sort(function compare(a, b) {
		var dateA = new Date(a.dueDate);
		var dateB = new Date(b.dueDate);
		return dateA - dateB;
	});

	for (let i = 0; i < array.length; i++) {
		let title = array[i].title;
		let details = array[i].details;
		let date = array[i].dueDate;
		const taskList = document.querySelector('.task-list');
		taskList.appendChild(createTaskLi(title, details, date, i));
	}
	const taskList = document.querySelector('.task-list');
	taskList.appendChild(appendTaskAddButton());
}
