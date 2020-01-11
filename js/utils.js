'use strict';

(function() {
	var ESC_KEYCODE = 27,
		ENTER_KEYCODE = 13;

	window.utils = {
		isEscEvent: function(evt, action) {
			if (evt.keyCode === ESC_KEYCODE) {
				action();
			};
		},
		isEnterEvent: function(evt, action) {
			if (evt.keyCode === ENTER_KEYCODE) {
				action();
			};
		},
		extractRandomItem: function(array) {
			var index = Math.floor(Math.random() * array.length);
			var result = array[index];
			array.splice(index, 1);
			return result;
		},
		cloneArray: function(array) {
			return array.slice(0, array.length);
		},
		createElement: function(tag, classes) {
			var element = document.createElement(tag);

			for (var i = 0; i < classes.length; i++) {
				element.classList.add(classes[i]);
			};

			return element;
		}
	};
})();
