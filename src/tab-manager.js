import renderAllTasks from './render-all-tasks';
import removeAllChildren from './remove-page';
//loads the renderAllTasks page by default
renderAllTasks();

let currentTab = 'all';
export default function tabManager(tabName) {
	if (tabName === currentTab) {
		return;
	} else if (tabName === 'all') {
		removeAllChildren();
		renderAllTasks();
		currentTab = 'all';
	} else if (tabName === 'today') {
		removeAllChildren();
		currentTab = 'today';
	} else if (tabName === 'week') {
		removeAllChildren();
		currentTab = 'week';
	}
	console.log(currentTab);
}
