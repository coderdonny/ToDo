export function appendProjectForm() {
	const newLi = document.createElement('li');

	const titleInput = document.createElement('input');

	titleInput.setAttribute('required', '');

	// const row = document.createElement('p');

	titleInput.setAttribute('type', 'text');
	titleInput.setAttribute('id', 'title');
	titleInput.setAttribute('placeholder', 'e.g., "Clean the dishes"');

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
		'bg-opacity-10',
		'py-1',
		'px-2',
		'rounded-md'
	);

	newLi.classList.add(
		'create-task-li',
		'pl-4',
		'rounded',
		'align-middle',
		'py-2',
		'gap-2',
		'flex',
		'shadow-2xl',
		'w-1/3',
		'h-fit',
		'my-52',
		'bg-darkBlue',
		'bg-opacity-10',
		'backdrop-blur-lg',
		'font-raj',
		'ml-5',
		'border-l',
		'border-lightBlue',
		'pl-5'
	);

	newLi.appendChild(titleInput);

	return newLi;
}
