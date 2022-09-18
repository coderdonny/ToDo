export default function removeAllChildren() {
	const taskContainer = document.querySelector('.task-container');
	while (taskContainer.firstChild) {
		taskContainer.removeChild(taskContainer.firstChild);
	}
}
