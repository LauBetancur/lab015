document.addEventListener('DOMContentLoaded', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    const taskStats = document.getElementById('task-stats');

    // Función para mostrar las tareas en el DOM
    function displayTasks() {
        taskList.innerHTML = ''; 
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            const taskName = document.createElement('span');
            taskName.textContent = task.name;
            if (task.completed) {
                taskName.classList.add('completed');
            }
            taskItem.appendChild(taskName);
            const taskStatus = document.createElement('span');
            taskStatus.textContent = task.completed ? 'Completada' : 'Por hacer';
            taskStatus.classList.add('task-status', task.completed ? 'completed' : 'pending');
            taskItem.appendChild(taskStatus);
            const completeBtn = document.createElement('button');
            completeBtn.classList.add('complete-btn');
            completeBtn.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                displayTasks();
            });
            taskItem.appendChild(completeBtn);
            taskList.appendChild(taskItem);
        });

        const completedTasks = tasks.filter(task => task.completed).length;
        const pendingTasks = tasks.filter(task => !task.completed).length;
        taskStats.innerHTML = `Tareas completadas: ${completedTasks}<br>Tareas pendientes: ${pendingTasks}`;
    }

    displayTasks();
});
