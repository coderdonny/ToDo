export function appendTaskForm() {
	const addTaskBtn = document.querySelector('.add-task');
	const taskList = document.querySelector('.task-list');

	taskList.removeChild(addTaskBtn);
	// addTaskBtn.removeEventListener('click', appendTaskForm);
	const newLi = document.createElement('li');

	const titleLabel = document.createElement('label');
	const titleInput = document.createElement('input');

	const detailsLabel = document.createElement('label');
	const detailsInput = document.createElement('input');

	const dateLabel = document.createElement('label');
	const dateInput = document.createElement('input');

	const deleteBtn = document.createElement('img');

	const taskForm = document.createElement('form');

	const submitBtn = document.createElement('button');

	deleteBtn.src = './images/delete-icon.svg';

	const row1 = document.createElement('p');
	const row2 = document.createElement('p');
	const row3 = document.createElement('p');
	const row4 = document.createElement('p');

	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('id', 'title');
	titleInput.setAttribute('placeholder', 'e.g., "Clean the dishes"');

	titleLabel.setAttribute('for', 'title');
	titleLabel.textContent = 'Title:';

	detailsInput.setAttribute('type', 'text');
	detailsInput.setAttribute('id', 'details');
	detailsInput.setAttribute(
		'placeholder',
		'e.g., "Finish this task before the guests arrive at 5pm"'
	);

	detailsLabel.setAttribute('for', 'details');
	detailsLabel.textContent = 'Details:';

	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('id', 'date');

	dateLabel.setAttribute('for', 'date');
	dateLabel.textContent = 'Due date:';

	submitBtn.textContent = 'Add Task';

	submitBtn.classList.add(
		'task-form-submit-button',
		'hover:bg-green-600',
		'bg-highlightBlue',
		'text-white',
		'font-raj',
		'font-200',
		'py-1',
		'px-12',
		'rounded',
		'mt-4',
		'mb-2',
		'transition-all',
		'duration-500'
	);

	titleInput.classList.add(
		'task-title-input',
		'bg-transparent',
		'w-full',
		'focus:border-none',
		'focus:outline-none',
		'border-transparent',
		'focus:border-transparent',
		'focus:ring-0',
		'text-highlightBlue',
		'bg-OOFGrey',
		'bg-opacity-5',
		'py-1',
		'px-2',
		'rounded-md'
	);

	titleLabel.classList.add('font-bold');
	detailsLabel.classList.add('font-bold');
	dateLabel.classList.add('font-bold');

	detailsInput.classList.add(
		'task-details-input',
		'bg-transparent',
		'w-full',
		'focus:border-none',
		'focus:outline-none',
		'border-transparent',
		'focus:border-transparent',
		'focus:ring-0',
		'text-highlightBlue',
		'bg-OOFGrey',
		'bg-opacity-5',
		'py-1',
		'px-2',
		'rounded-md'
	);

	dateInput.classList.add(
		'task-date-input',
		'bg-transparent',
		'w-full',
		'focus:border-none',
		'focus:outline-none',
		'border-transparent',
		'focus:border-transparent',
		'focus:ring-0',
		'text-highlightBlue',
		'bg-OOFGrey',
		'bg-opacity-5',
		'py-1',
		'px-2',
		'rounded-md'
	);

	row1.classList.add('w-full', 'mb-2');
	row2.classList.add('w-full', 'mb-2');
	row3.classList.add('w-full');
	row4.classList.add('flex', 'justify-center');

	taskForm.classList.add('flex-auto');
	deleteBtn.classList.add(
		'align-top',
		'self-start',
		'mr-2',
		'mt-1',
		'cursor-pointer',
		'create-task-exit'
	);

	newLi.classList.add(
		'create-task-li',
		'pl-4',
		'border',
		'rounded',
		'border-lightBlue',
		'align-middle',
		'py-2',
		'gap-2',
		'flex',
		'shadow-2xl'
	);

	row1.appendChild(titleLabel);
	row1.appendChild(titleInput);
	row2.appendChild(detailsLabel);
	row2.appendChild(detailsInput);
	row3.appendChild(dateLabel);
	row3.appendChild(dateInput);
	row4.appendChild(submitBtn);

	taskForm.appendChild(row1);
	taskForm.appendChild(row2);
	taskForm.appendChild(row3);
	taskForm.appendChild(row4);

	newLi.appendChild(taskForm);
	newLi.appendChild(deleteBtn);
	taskList.appendChild(newLi);
}
