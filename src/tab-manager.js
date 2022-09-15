export default function tabManager() {
	let currentTab = 'all';

	const taskSideBar = document.querySelector('.task-sidebar');
	taskSideBar.addEventListener('click', function (e) {
		if (e.target.classList.contains('all-tasks-tab')) {
			if (currentTab === 'all') {
				return;
			}
			currentTab = 'all';
			console.log('all');
		} else if (e.target.classList.contains('today-tab')) {
			if (currentTab === 'today') {
				return;
			}
			currentTab = 'today';
			console.log('today');
		} else if (e.target.classList.contains('week-tab')) {
			if (currentTab === 'week') {
				return;
			}
			currentTab = 'week';
			console.log('week');
		}
	});
	return currentTab;
}
