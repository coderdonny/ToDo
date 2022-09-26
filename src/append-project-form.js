export function appendProjectForm() {
	const newLi = document.createElement('li');

	const titleInput = document.createElement('input');

	titleInput.setAttribute('required', '');

	const confirmButton = document.createElement('img');
	confirmButton.src = './images/confirm.svg';

	const cancelButton = document.createElement('img');
	cancelButton.src = './images/cancel.svg';

	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('id', 'title');
	titleInput.setAttribute('placeholder', 'Project Name');

	titleInput.classList.add(
		'project-title-input',
		'bg-transparent',
		'w-full',
		'focus:border-none',
		'focus:outline-none',
		'border-transparent',
		'focus:border-transparent',
		'focus:ring-0',
		'text-highlightBlue',
		'bg-transparent',
		// 'bg-OOFGrey',
		// 'bg-opacity-10',
		'py-1',
		'px-2',
		'rounded-md'
	);

	cancelButton.classList.add(
		'new-project-cancel',
		'rounded-lg',
		'dark:text-white',
		'hover:bg-gray-100',
		'dark:hover:bg-gray-700',
		'px-1',
		'cursor-pointer',
		'py-2',
		'mr-1'
	);
	confirmButton.classList.add(
		'new-project-confirm',
		'rounded-lg',
		'dark:text-white',
		'hover:bg-gray-100',
		'dark:hover:bg-gray-700',
		'px-1',
		'cursor-pointer',
		'py-2'
	);

	newLi.classList.add(
		'create-project-li',
		'items-center',
		'p-1',
		'gap-2',
		'flex',
		'w-full',
		'bg-darkBlue',
		'bg-opacity-10',
		'font-raj',
		'bg-gray-500',
		'rounded-md'
	);

	newLi.appendChild(titleInput);
	newLi.appendChild(confirmButton);
	newLi.appendChild(cancelButton);

	return newLi;
}
