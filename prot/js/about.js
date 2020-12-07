const opn1 = document.getElementById('opn1');
	const modal_container= document.getElementById('abta');
	const cls1 = document.getElementById('cls1');

	opn1.addEventListener('click',() => {
		modal_container.classList.add('show');
	});
	cls1.addEventListener('click',() => {
		modal_container.classList.remove('show');
	});
	cls1r.addEventListener('click',() => {
		modal_container.classList.remove('show');
	});