export default function removeAllChildren() {
	const taskContainer = document.querySelector('.task-list');
	while (taskContainer.firstChild) {
		taskContainer.removeChild(taskContainer.firstChild);
	}
}
