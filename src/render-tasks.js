import { allTasks } from '.';
import appendTaskAddButton from './append-add-task-button';
export default function renderTasks() {
	for (let i = 0; i < allTasks.length; i++) {
		let title = allTasks[i].title;
		let details = allTasks[i].details;
		let date = allTasks[i].dueDate;

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
		detailsDOM.classList.add('text-OOFGrey');

		newTaskDOM.appendChild(titleContainer);
		newTaskDOM.appendChild(detailsContainer);
		newTaskDOM.appendChild(dateContainer);

		taskList.appendChild(newTaskDOM);
	}
	const taskList = document.querySelector('.task-list');
	taskList.appendChild(appendTaskAddButton());
}
