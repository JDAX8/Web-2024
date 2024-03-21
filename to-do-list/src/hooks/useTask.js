import { useState } from "react";

const initTasks = JSON.parse(window.localStorage.getItem("tasks")) ?? [] 

export const useTask = () => {
    const [tasks, setTasks] = useState(initTasks);

    const handleTasks = (type, task) => {
        switch (type) {
            case "add":
                addTask(task);
                break;
            case "delete":
                deleteTask(task);
                break;
            case "deleteAll":
                deleteAllTasks();
                break;
            default:
                console.error("Tipo de tarea no reconocido.");
        }
    };

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
      };

    const deleteTask = (taskToDeleteID) => {
        const updatedTasks = tasks.filter(task => task.id !== taskToDeleteID);
        setTasks(updatedTasks);
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };

    return {
        tasks,
        handleTasks,
    };
};
