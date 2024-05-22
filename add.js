document.getElementById('add-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value.trim();
    if (taskName) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ name: taskName, completed: false });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('message').textContent = 'TODO guardado correctamente';
        document.getElementById('task-name').value = '';
    } else {
        document.getElementById('message').textContent = 'Por favor ingrese una tarea';
    }
});
