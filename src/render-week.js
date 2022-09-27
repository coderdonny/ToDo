import { allTasks } from '.';
import appendTaskAddButton from './append-add-task-button';
import createTaskLi from './create-task-DOM';
import { parseISO, format } from 'date-fns';

export default function renderWeek() {
	//sorts tasks by closest due date
	allTasks.sort(function compare(a, b) {
		var dateA = new Date(a.dueDate);
		var dateB = new Date(b.dueDate);
		return dateA - dateB;
	});

	//filters 'all task' array and returns tasks due within current week
	const weekArray = allTasks.filter(filterWeek);

	function filterWeek(date) {
		const sevenDays = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
		return (
			parseISO(date.dueDate) <= sevenDays &&
			parseISO(date.dueDate) >= Date.now()
		);
	}

	for (let i = 0; i < weekArray.length; i++) {
		let title = weekArray[i].title;
		let details = weekArray[i].details;
		let date = weekArray[i].dueDate;

		const taskList = document.querySelector('.task-list');
		taskList.appendChild(createTaskLi(title, details, date, i));
	}
	const taskList = document.querySelector('.task-list');
	taskList.appendChild(appendTaskAddButton());
}
