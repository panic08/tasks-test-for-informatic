const button = document.querySelector('.back-button');
button.addEventListener('click', function() {

    window.location.href = `/`;
});

const url = new URL(window.location.href);
const idValue = url.searchParams.get('id');
loader.style.display = 'block';

if (idValue !== null) {

    fetch(`/api/task?id=${idValue}`)
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';

            const title = data.title;
            const message = data.message;

            const taskInfoContainer = document.querySelector('.task-info');
            const titleElement = taskInfoContainer.querySelector('h2');
            const messageElement = taskInfoContainer.querySelector('p');

            titleElement.textContent = title;
            messageElement.textContent = message;
        })
        .catch(error => {
            loader.style.display = 'none';
        });
}