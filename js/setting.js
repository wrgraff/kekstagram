var uploadInput = document.querySelector('.upload-input'),
	uploadWindow = document.querySelector('.upload-overlay'),
	closeUploadWindowButton = uploadWindow.querySelector('.upload-form-cancel');

var resizeInput = document.querySelector('.upload-resize-controls-value'),
	resizeButtons = document.querySelectorAll('.upload-resize-controls-button');
var imageSize = 1,
	activeEffect = 'none';

// Upload pictures window
uploadInput.addEventListener('change', openUploadWindow);
closeUploadWindowButton.addEventListener('click', closeUploadWindow);

function openUploadWindow() {
	uploadWindow.classList.remove('hidden');
	setSize(imageSize);
	document.addEventListener('keydown', uploadWindowCloseHandler);
};
function closeUploadWindow() {
	uploadWindow.classList.add('hidden');
	uploadInput.value = '';
	document.removeEventListener('keydown', uploadWindowCloseHandler);
};
function uploadWindowCloseHandler(evt) {
	if (evt.keyCode == ESC_KEYCODE) {
		closeUploadWindow();
	};
};

// Image setting
var imagePreview = document.querySelector('.effect-image-preview'),
	imageEffectControls = document.querySelectorAll('.upload-effect-controls input');

// Filters
for (var i = 0; i < imageEffectControls.length; i++) {
	imageEffectControls[i].addEventListener('click', (evt) => {
		activeEffect = evt.target.id;
		imagePreview.style.filter = applyEffect(1);
	});
};

function applyEffect(value) {
	if (activeEffect == 'upload-effect-chrome') {
		return 'grayscale(' + value + ')';
	} else if (activeEffect == 'upload-effect-sepia') {
		return 'sepia(' + value + ')';
	} else if (activeEffect == 'upload-effect-marvin') {
		return 'invert(' + value + ')';
	} else if (activeEffect == 'upload-effect-phobos') {
		return 'blur(' + Math.round(value * 5) + 'px)';
	} else if (activeEffect == 'upload-effect-heat') {
		return 'brightness(' + ((value * 2) + 1) + ')';
	}
	return 'none';
};

// Scale
for (var i = 0; i < resizeButtons.length; i++) {
	resizeButtons[i].addEventListener('click', (evt) => {
		if ((evt.target.classList.contains('upload-resize-controls-button-inc')) && (imageSize < 1)) {
			imageSize += .25;
		} else if ((evt.target.classList.contains('upload-resize-controls-button-dec')) && (imageSize > .25)) {
			imageSize -= .25;
		};
		setSize(imageSize);
	});
};

function setSize(value) {
	resizeInput.value = (value * 100) + '%';
	imagePreview.style.transform = 'scale(' + value + ')';
};

// Saturation slider
var sliderLine = document.querySelector('.upload-effect-level-line'),
	sliderPin = document.querySelector('.upload-effect-level-pin');

sliderPin.addEventListener('mouseup', () => {
	var intense = Math.round(sliderPin.offsetLeft / sliderLine.offsetWidth * 100) / 100;
	imagePreview.style.filter = applyEffect(intense);
});
