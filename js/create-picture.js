'use strict';

(function() {
	var template = document.querySelector('#picture-template').content.querySelector('.picture');

	window.picture = {
		create: function(picture) {
			return setupPicture(picture);
		}
	};

	function setupPicture(picture) {
		var element = template.cloneNode(true);

		element.querySelector('img').src = picture.url;
		element.querySelector('.picture-likes').textContent = picture.likes;
		element.querySelector('.picture-comments').textContent = picture.comments.length;

		return element;
	};
})();
