const loader = document.getElementById('loader');
loader.style.display = 'block';
fetch('/api/task/getAll')
    .then(response => response.json())
    .then(data => {
        loader.style.display = 'none';

        data.forEach(item => {
            const tabContainer = document.querySelector('.tabs-container');
            const newTab = document.createElement('div');
            newTab.className = 'tab';
            newTab.textContent = item.title;
            newTab.setAttribute('data-id', item.id);
            tabContainer.appendChild(newTab);

            newTab.addEventListener('click', function() {
                const taskId = item.id;

                window.location.href = `/task?id=${taskId}`;
            });
        });
    })
    .catch(error => {
        loader.style.display = 'none';
    });