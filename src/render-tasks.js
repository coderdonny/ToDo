import { allTasks } from '.';
import appendTaskAddButton from './append-add-task-button';
import createTaskLi from './create-task-DOM';

export default function renderTasks() {
	//sorts tasks by closest due date
	allTasks.sort(function compare(a, b) {
		var dateA = new Date(a.dueDate);
		var dateB = new Date(b.dueDate);
		return dateA - dateB;
	});

	for (let i = 0; i < allTasks.length; i++) {
		let title = allTasks[i].title;
		let details = allTasks[i].details;
		let date = allTasks[i].dueDate;
		const taskList = document.querySelector('.task-list');
		taskList.appendChild(createTaskLi(title, details, date, i));
	}
	const taskList = document.querySelector('.task-list');
	taskList.appendChild(appendTaskAddButton());
}
