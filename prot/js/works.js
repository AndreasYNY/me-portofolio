const opn3 = document.getElementById('opn3');
	const aaab = document.getElementById('aaab');
	const cls3 = document.getElementById('cls3');

	opn3.addEventListener('click',() => {
		aaab.classList.add('showr');
	});
	cls3.addEventListener('click',() => {
		aaab.classList.remove('showr');
	});