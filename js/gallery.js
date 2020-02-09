'use strict';

(function() {
	var picturesContainer = document.querySelector('.pictures'),
		bigPictureContainer = document.querySelector('.big-picture'),
		closeBigPictureButton = bigPictureContainer.querySelector('.big-picture__cancel');

	window.backend.load(successHandler, errorHandler);

	function successHandler(data) {
		for (var i = 0; i < data.length; i++) {
			var picture = data[i],
				pictureElement = window.picture.create(data[i]);
	
			pictureClickHandler(picture, pictureElement);
			picturesContainer.append(pictureElement);
		};
	};

	function errorHandler(errorText) {
		console.log(errorText);
	};

	closeBigPictureButton.addEventListener('click', closeBigPicture);

	function pictureClickHandler(picture, pictureElement) {
		pictureElement.addEventListener('click', (evt) => {
			evt.preventDefault();
			window.bigPicture.setup(picture);
			openBigPicture();
		});
	};
	function openBigPicture() {
		bigPictureContainer.classList.remove('hidden');
		document.addEventListener('keydown', bigPictureCloseHandler);
	};
	function closeBigPicture() {
		bigPictureContainer.classList.add('hidden');
		document.removeEventListener('keydown', bigPictureCloseHandler);
	};
	function bigPictureCloseHandler(evt) {
		window.utils.isEscEvent(evt, closeBigPicture);
	};
})();
