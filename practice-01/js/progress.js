"use strict";

const totalTasks = 18;
const completedTasks = 6;

// Здесь разместите своё решение.

const totalIsValid = Number.isInteger(totalTasks) && totalTasks >= 0 && totalTasks <= 1000;
const completedIsValid = Number.isInteger(completedTasks) && completedTasks >= 0 && completedTasks <= totalTasks;

if (!totalIsValid || !completedIsValid) {
    console.log("Ошибка: некорректные входные данные.");
} else if (totalTasks === 0 && completedTasks === 0) {
    console.log("Задач пока нет");
} else {
    const remainingTasks = totalTasks - completedTasks;
    const progressPercent = (completedTasks / totalTasks * 100).toFixed(1);

    let status = "В работе";
    if (completedTasks === 0) status = "Не начато";
    if (completedTasks === totalTasks) status = "Завершено";

    console.log(`Всего задач: ${totalTasks}`);
    console.log(`Выполнено: ${completedTasks}`);
    console.log(`Осталось: ${remainingTasks}`);
    console.log(`Прогресс: ${progressPercent}%`);
    console.log(`Статус: ${status}`);
}