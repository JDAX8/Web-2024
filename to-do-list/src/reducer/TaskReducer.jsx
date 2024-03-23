import React from "react";
import { useState, useEffect } from "react";
import { TASK_ACTIONS } from '../consts/TasksActions'

export const tasksReducer = (state, action) => {
    switch (action.type) {
      case TASK_ACTIONS.ADD_TASK: {
        const updatedTasks = [...state, action.payload];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      }
      case TASK_ACTIONS.DELETE_TASK: {
        const filteredTasks = state.filter(task => task.id !== action.payload);
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        return filteredTasks;
      }
      case TASK_ACTIONS.DELETE_ALL_TASKS:
        localStorage.removeItem("tasks");
        return [];
      default:
        console.error("Tipo de tarea no reconocido.");
        return state;
    }
  };