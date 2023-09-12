<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Админка IT Задачника</title>
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
</head>
<body>
<header class="glass-header">
    <h1>Админ-панель</h1>
</header>
<main>
    <form class="task-form">
        <label for="task-title">Заголовок задачи:</label>
        <input type="text" id="task-title" name="task-title" required>
        <label for="task-description">Описание задачи:</label>
        <textarea id="task-description" name="task-description" rows="4" required></textarea>
        <button id="button" type="submit">Добавить задачу</button>
    </form>
</main>
</body>
<script src="/scripts/script3.js"></script>
</html>
