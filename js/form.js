'use strict';

(function() {
	document.querySelector('.upload-overlay').classList.remove('hidden');
	var hashtagsInput = document.querySelector('.upload-form-hashtags');
	hashtagsInput.addEventListener('blur', function(evt) {
		var input = evt.target;
		var hashtags = input.value.split(' ');

		for (var i = 0; i < hashtags.length; i++) {
			var hashtagLength = hashtags[i].length;
			if (hashtagLength >= 20) {
				input.setCustomValidity('Хэштеги должны быть меньше 20 символов');
			};
		};
	});
})();
