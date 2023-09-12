const button = document.getElementById("button");
const title = document.getElementById("task-title")
const description = document.getElementById("task-description")

button.addEventListener('click', function() {

        const data = {
        title: `${title.value}`,
        message: `${description.value}`
    }

    fetch('/api/task/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseData => {
        })

});