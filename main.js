
function updateProgress() {
    const startDate = new Date('2024-09-01');
    const endDate = new Date('2025-01-06');
    const today = new Date();
    // Uncomment the following line and comment out the line above to test with a specific date
    // const today = new Date('2024-11-15');

    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const daysPassed = Math.ceil((today - startDate) / (1000 * 60 * 60 * 24));

    let workDaysPassed = 0;
    let currentDate = new Date(startDate);
    while (currentDate <= today && currentDate <= endDate) {
        if (currentDate.getDay() !== 0) { // Not Sunday
            workDaysPassed++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    const totalWorkDays = 20 * 5; // 20 weeks, 5 work days per week
    const progress = Math.min(100, (workDaysPassed / totalWorkDays) * 100);

    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-percentage').textContent = `${progress.toFixed(1)}%`;

    const todayProgress = (daysPassed / totalDays) * 100;
    document.getElementById('today-marker').style.left = `${todayProgress}%`;

    const completedExercises = Math.min(200, Math.floor(workDaysPassed / totalWorkDays * 200));
    document.getElementById('completed-exercises').textContent = completedExercises;

    // Corregido: Cálculo preciso de la semana actual
    const currentWeek = Math.min(20, Math.floor(daysPassed / 7) + 1);
    document.getElementById('current-week').textContent = currentWeek;
}

updateProgress();
setInterval(updateProgress, 60000); // Update every minute
