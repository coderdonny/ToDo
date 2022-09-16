const taskSideBar = document.querySelector('.task-sidebar');

taskSideBar.addEventListener('click', function () {
	if (e.target.classList.contains('all-tasks-tab')) {
		console.log('all');
	} else if (e.target.classList.contains('today-tab')) {
		console.log('today');
	} else if (e.target.classList.contains('week-tab')) {
		console.log('week');
	}
});
