document.addEventListener('DOMContentLoaded', () => {
	/* dropdown
	let dropdown = document.querySelector('.dropdown');
	dropdown.addEventListener('click', function(event) {
		event.stopPropagation();
		dropdown.classList.toggle('is-active');
	});*/
	// modal
	let modal = document.querySelector('.modal');
	const open  = () => modal.classList.add('is-active');
  const close = () => modal.classList.remove('is-active');
	document.querySelector('#modal').addEventListener('click', open);
	document.querySelector('.modal-background').addEventListener('click', close);
	document.querySelector('.delete').addEventListener('click', close);
});