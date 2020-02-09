'use strict';

(function() {
    var LOAD_URL = 'https://js.dump.academy/kekstagram/data';
    var UPLOAD_URL = 'https://js.dump.academy/kekstagram';

	window.backend = {
        load: load,
        save: upload
	};

	function load(successHanler, errorHandler) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                successHanler(xhr.response);
            } else {
                errorHandler('Получен фиговый ответ от сервера. Статус: ' + xhr.status + ' ' + xhr.statusText + ' =(');
            };
        });
        xhr.addEventListener('error', function() {
            errorHandler('Произошла ошибка соединения с сервером =(');
        });
        xhr.addEventListener('timeout', function() {
            errorHandler('Не удалось получить ответ от сервера за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 10000;
        xhr.open('GET', LOAD_URL);
        xhr.send();
    };
    
    function upload(data, successHanler, errorHandler) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                successHanler(xhr.response);
            } else {
                errorHandler('Получен фиговый ответ от сервера. Статус: ' + xhr.status + ' ' + xhr.statusText + ' =(');
            };
        });
        xhr.addEventListener('error', function() {
            errorHandler('Произошла ошибка соединения с сервером =(');
        });
        xhr.addEventListener('timeout', function() {
            errorHandler('Не удалось получить ответ от сервера за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 10000;
        xhr.open('POST', UPLOAD_URL);
        xhr.send(data);
    };
})();
