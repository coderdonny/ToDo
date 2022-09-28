export function appendNewProject(name, projectID) {
	const newLink = document.createElement('a');
	const checkMark = document.createElement('img');
	const projectName = document.createElement('span');

	checkMark.src = './images/project-checkmark.svg';

	projectName.textContent = name;

	newLink.classList.add(
		`project${projectID}`,
		'flex',
		'items-center',
		'p-2',
		'text-base',
		'font-raj',
		'font-thin',
		'text-gray-900',
		'rounded-lg',
		'dark:text-white',
		'hover:bg-gray-100',
		'dark:hover:bg-gray-700',
		'cursor-pointer'
	);

	projectName.classList.add('ml-3');

	newLink.appendChild(checkMark);
	newLink.appendChild(projectName);

	newLink.dataset.project = projectID;
	return newLink;
}
