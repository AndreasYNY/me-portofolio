const opn2 = document.getElementById('opn2');
	const aaa = document.getElementById('abtc');
	const cls2 = document.getElementById('cls2');

	opn2.addEventListener('click',() => {
		aaa.classList.add('showb');
	});
	cls2.addEventListener('click',() => {
		aaa.classList.remove('showb');
	});