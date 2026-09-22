"use strict";

const totalTasks = 12;
const completedTasks = 5;
const dailyLimit = 3;

// Здесь разместите своё решение.

const totalIsValid = Number.isInteger(totalTasks) && totalTasks >= 0 && totalTasks <= 1000;
const completedIsValid = Number.isInteger(completedTasks) && completedTasks >= 0 && completedTasks <= totalTasks;
const dailyLimitIsValid = Number.isInteger(dailyLimit) && dailyLimit >= 1 && dailyLimit <= 1000;

if (!totalIsValid || !completedIsValid || !dailyLimitIsValid) {
    console.log("Ошибка: некорректные входные данные.");
} else {
    let remainingTasks = totalTasks - completedTasks;
    console.log(`Осталось задач: ${remainingTasks}`);

    if (remainingTasks === 0) {
        console.log("Все задачи уже выполнены.");
        console.log("Потребуется дней: 0");
    } else {
        let day = 0;
        while (remainingTasks > 0) {
            day++;
            const tasksToday = Math.min(dailyLimit, remainingTasks);
            remainingTasks -= tasksToday;
            console.log(`День ${day}: выполнено ${tasksToday}, осталось ${remainingTasks}`);
        }
        console.log(`Потребуется дней: ${day}`);
    }
}