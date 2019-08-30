function form() {
    let message = {
        loading: 'Загрузка..',
        success: 'Заявка отправлена.',
        failure: 'Ошибка.'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        let formData = new FormData(form);
        let simple = {};

        formData.forEach(function(value, key) {
            simple[key] = value;
        });

        let json = JSON.stringify(simple);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let counter = 0; counter < input.length; counter++) {
            input[counter].value = '';
        }
    });


    let contactsForm = document.querySelector('.contact-form form');

    contactsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactsForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(contactsForm);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                } else {
                    statusMessage.innerHTML = message.failure;
                };
            };
        };
        for (let counter = 0; counter < contactsForm.length; counter++) {
            contactsForm[counter].value = '';
        }
    });
}

module.exports = form;