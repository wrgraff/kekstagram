'use strict';

(function() {
	var bigPictureContainer = document.querySelector('.big-picture');

	window.bigPicture = {
		setup: function(picture) {
			setupBigPicture(picture);
		}
	};

	function setupBigPicture(picture) {
		bigPictureContainer.querySelector('.big-picture__img img').src = picture.url;
		bigPictureContainer.querySelector('.likes-count').textContent = picture.likes;
		bigPictureContainer.querySelector('.comments-count').textContent = picture.comments.length;
		bigPictureContainer.querySelector('.social__comments').append(addComments(picture.comments));
		bigPictureContainer.querySelector('.social__caption').textContent = picture.description;
	};

	function addComments(comments) {
		var fragment = document.createDocumentFragment();

		for (var i = 0; i < comments.length; i++) {
			var item = window.utils.createElement('li', ['social__comment', 'social__comment--text']);

			var img = window.utils.createElement('img', ['social__picture']);
				img.src = 'img/avatar-' + (Math.floor(Math.random() * 5) + 1) + '.svg';
				img.width = '35';
				img.height = '35';
				img.alt = 'Аватар комментатора фотографии';

			var text = window.utils.createElement('p', ['social__text']);
				text.textContent = comments[i];

			item.append(img);
			item.append(text);
			fragment.append(item);
		};

		return fragment;
	};
})();
