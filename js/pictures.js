var ESC_KEYCODE = 27,
	ENTER_KEYCODE = 13;

// Create random arrays for images
var urls = [];
for (var i = 0; i < 25; i++) {
	urls[i] = 'photos/' + (i + 1) + '.jpg';
};

var likes = [];
for (var i = 0; i < 25; i++) {
	likes[i] = Math.floor(Math.random() * 200) + 15;
};

var commentsSource = [
	'Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица улюдей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
var comments = [];
for (var i = 0; i < 25; i++) {
	var source = commentsSource.slice(0, commentsSource.length);
	comments[i] = [getRandomItem(source)];
	if (Math.random() > .5) {
		comments[i][1] = getRandomItem(source);
	};
};

var descriptionSource = [
	'Тестим новую камеру!',
	'Затусили с друзьям и на море',
	'Как же круто тут кормят',
	'Отдыхаем...',
	'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
	'Вот это тачка!',
];
var descriptions = [];
for (var i = 0; i < 25; i++) {
	descriptions[i] = descriptionSource[Math.floor(Math.random() * descriptionSource.length)];
};

// Appending pictures to the DOM
var pictures = createPicturesArray(25);
appendPictures( pictures );

function appendPictures(pictures) {
	var template = document.querySelector('#picture-template').content.querySelector('.picture');
	var picturesContainer = document.querySelector('.pictures');

	for (var i = 0; i < pictures.length; i++) {
		picturesContainer.append( createPicture(template.cloneNode(true), pictures[i]) );
	};
};

var bigPicture = document.querySelector('.big-picture'),
	closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
	closeBigPictureButton.addEventListener('click', closeBigPicture);

function setupBigPicture(picture) {
	if (!picture) {
		picture = pictures[0];
	};

	bigPicture.querySelector('.big-picture__img img').src = picture.url;
	bigPicture.querySelector('.likes-count').textContent = picture.likes;
	bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
	bigPicture.querySelector('.social__comments').append(addComments(picture.comments));
	bigPicture.querySelector('.social__caption').textContent = picture.description;

	openBigPicture();
};

function openBigPicture() {
	bigPicture.classList.remove('hidden');
	document.addEventListener('keydown', bigPictureCloseHandler);
};
function closeBigPicture() {
	bigPicture.classList.add('hidden');
	document.removeEventListener('keydown', bigPictureCloseHandler);
};
function bigPictureCloseHandler(evt) {
	if (evt.keyCode == ESC_KEYCODE) {
		closeBigPicture();
	};
};

function createPicturesArray(count) {
	var pictures = [];

	for (var i = 0; i < count; i++) {
		pictures[i] = {
			url: getRandomItem(urls),
			likes: getRandomItem(likes),
			comments: getRandomItem(comments),
			description: getRandomItem(descriptions),
		};
	};

	return pictures;
};

function createPicture(element, picture) {
	element.querySelector('img').src = picture.url;
	element.querySelector('.picture-likes').textContent = picture.likes;
	element.querySelector('.picture-comments').textContent = picture.comments.length;

	element.addEventListener('click', (evt) => {
		evt.preventDefault();
		setupBigPicture(picture);
	});

	return element;
};

function addComments(comments) {
	var fragment = document.createDocumentFragment();

	for (var i = 0; i < comments.length; i++) {
		var item = createElement('li', ['social__comment', 'social__comment--text']);

		var img = createElement('img', ['social__picture']);
			img.src = 'img/avatar-' + (Math.floor(Math.random() * 5) + 1) + '.svg';
			img.width = '35';
			img.height = '35';
			img.alt = 'Аватар комментатора фотографии';

		var text = createElement('p', ['social__text']);
			text.textContent = comments[i];

		item.append(img);
		item.append(text);
		fragment.append(item);
	};

	return fragment;
};

function getRandomItem(array) {
	var index = Math.floor(Math.random() * array.length);
	var result = array[index];
	array.splice(index, 1);
	return result;
};

function createElement(tag, classes) {
	var element = document.createElement(tag);

	for (var i = 0; i < classes.length; i++) {
		element.classList.add(classes[i]);
	};

	return element;
};
