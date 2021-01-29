const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


const images = document.querySelectorAll('.photoa');
images.forEach(image => {
	image.addEventListener('click', e =>{
		lightbox.classList.add('on');
		const img = document.createElement('img');
		img.src = image.src;
		while (lightbox.firstChild){
			lightbox.removeChild(lightbox.firstChild)
		}
		lightbox.appendChild(img);
	});
});

lightbox.addEventListener('click', e =>{
	if (e.target !== e.currentTarget) return
	lightbox.classList.remove('on')
})