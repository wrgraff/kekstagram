'use strict';

(function() {
	var picturesContainer = document.querySelector('.pictures'),
		bigPictureContainer = document.querySelector('.big-picture'),
		closeBigPictureButton = bigPictureContainer.querySelector('.big-picture__cancel');
	var pictures = window.data.pictures;

	for (var i = 0; i < pictures.length; i++) {
		var picture = pictures[i],
			pictureElement = window.picture.create(pictures[i]);

		pictureElement.addEventListener('click', (evt) => {
			evt.preventDefault();
			window.bigPicture.setup(picture);
			openBigPicture();
		});
		picturesContainer.append(pictureElement);
	};

	closeBigPictureButton.addEventListener('click', closeBigPicture);

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
