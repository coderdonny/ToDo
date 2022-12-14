import { allTasks } from '.';
import appendTaskAddButton from './append-add-task-button';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { parseISO, format } from 'date-fns';

export default function renderToday() {
	//sorts tasks by closest due date
	allTasks.sort(function compare(a, b) {
		var dateA = new Date(a.dueDate);
		var dateB = new Date(b.dueDate);
		return dateA - dateB;
	});

	//filters 'all task' array and returns tasks due within current week
	const todayArray = allTasks.filter(filterToday);

	function filterToday(date) {
		const today = new Date(Date.now() + 24 * 60 * 60 * 1000);
		return (
			parseISO(date.dueDate) <= today &&
			parseISO(date.dueDate) >= Date.now()
		);
	}

	if (todayArray.length === 0) {
		const taskList = document.querySelector('.task-list');
		const newTaskDOM = document.createElement('li');
		const titleDOM = document.createElement('p');

		titleDOM.textContent = 'No tasks yet...';

		titleDOM.classList.add('text-red-500', 'text-lg');

		newTaskDOM.classList.add(
			'px-2',
			'flex',
			'justify-center',
			'border',
			'rounded',
			'border-transparent',
			'align-middle',
			'py-2',
			'gap-4',
			'transition-all',
			'duration-300'
		);

		newTaskDOM.appendChild(titleDOM);

		taskList.appendChild(newTaskDOM);
	}

	for (let i = 0; i < todayArray.length; i++) {
		let title = todayArray[i].title;
		let details = todayArray[i].details;
		let date = todayArray[i].dueDate;

		// console.log(parseISO(date));

		if (date === '') {
			date = 'N/A';
		} else {
			date = formatDistanceToNow(parseISO(date), {
				addSuffix: true,
			});
		}

		const taskList = document.querySelector('.task-list');
		const newTaskDOM = document.createElement('li');
		const titleDOM = document.createElement('p');
		const detailsDOM = document.createElement('p');
		const dateDOM = document.createElement('p');

		const titleContainer = document.createElement('div');
		const detailsContainer = document.createElement('div');
		const dateContainer = document.createElement('div');

		titleDOM.textContent = title;
		detailsDOM.textContent = details;
		dateDOM.textContent = date;

		titleContainer.appendChild(titleDOM);
		detailsContainer.appendChild(detailsDOM);
		dateContainer.appendChild(dateDOM);

		titleContainer.classList.add('flex-1', 'px-2');
		detailsContainer.classList.add('flex-1', 'px-2');
		dateContainer.classList.add('flex-1', 'px-2');

		if (i % 2 === 0) {
			newTaskDOM.classList.add(
				'bg-slate-400',
				'bg-opacity-10',
				'border-transparent'
			);
		} else {
			newTaskDOM.classList.add(
				'bg-slate-400',
				'bg-opacity-25',
				'border-transparent'
			);
		}

		newTaskDOM.classList.add(
			'px-2',
			'flex',
			'border',
			'rounded',
			'border-transparent',
			'align-middle',
			'py-2',
			'gap-4',
			'transition-all',
			'duration-300'
		);

		if (date.includes('ago')) {
			newTaskDOM.classList.add(
				'opacity-40',
				'bg-red-400',
				'bg-opacity-40',
				'border-transparent'
			);
			titleDOM.classList.add('line-through');
			detailsDOM.classList.add('line-through');
			dateDOM.classList.add('line-through');
		}

		detailsDOM.classList.add('text-OOFGrey');

		newTaskDOM.appendChild(titleContainer);
		newTaskDOM.appendChild(detailsContainer);
		newTaskDOM.appendChild(dateContainer);

		taskList.appendChild(newTaskDOM);
	}
	const taskList = document.querySelector('.task-list');
	taskList.appendChild(appendTaskAddButton());
}
