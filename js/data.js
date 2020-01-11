'use strict';

(function() {
	// Create random arrays for images
	var count = 25;
	var picturesUrls = generateUrls(count),
		picturesLikes = generateLikes(count),
		picturesComments = generateComments(count),
		picturesDescriptions = generateDescriptions(count);

	window.data = {
		pictures: createPicturesArray(count)
	};

	function createPicturesArray(count) {
		var pictures = [];
		for (var i = 0; i < count; i++) {
			pictures[i] = {
				url: window.utils.extractRandomItem(picturesUrls),
				likes: window.utils.extractRandomItem(picturesLikes),
				comments: window.utils.extractRandomItem(picturesComments),
				description: window.utils.extractRandomItem(picturesDescriptions)
			};
		};
		return pictures;
	};

	function generateUrls(count) {
		var urls = [];
		for (var i = 0; i < count; i++) {
			urls[i] = 'photos/' + (i + 1) + '.jpg';
		};
		return urls;
	};

	function generateLikes(count) {
		var likes = [];
		for (var i = 0; i < count; i++) {
			likes[i] = Math.floor(Math.random() * 200) + 15;
		};
		return likes;
	};

	function generateComments(count) {
		var source = [
			'Всё отлично!',
			'В целом всё неплохо. Но не всё.',
			'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
			'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
			'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
			'Лица улюдей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
		];
		var comments = [];
		for (var i = 0; i < count; i++) {
			var itemSource = window.utils.cloneArray(source);
			comments[i] = [window.utils.extractRandomItem(itemSource)];
			if (Math.random() > .5) {
				comments[i][1] = window.utils.extractRandomItem(itemSource);
			};
		};
		return comments;
	};

	function generateDescriptions(count) {
		var source = [
			'Тестим новую камеру!',
			'Затусили с друзьям и на море',
			'Как же круто тут кормят',
			'Отдыхаем...',
			'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
			'Вот это тачка!',
		];
		var descriptions = [];
		for (var i = 0; i < count; i++) {
			descriptions[i] = source[Math.floor(Math.random() * source.length)];
		};
		return descriptions;
	};
})();
