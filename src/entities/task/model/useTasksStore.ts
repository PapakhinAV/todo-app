import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Task } from './types';

interface TasksState {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, newTitle: string) => void;
    clearTasks: () => void;
    clearCompletedTasks: () => void;
    clearUncompletedTasks: () => void;
}

export const useTasksStore = create<TasksState>()(
    persist(
        (set) => ({
            tasks: [],

            addTask: (title) =>
                set((state) => ({
                    tasks: [
                        ...state.tasks,
                        {
                            id: crypto.randomUUID(),
                            title,
                            completed: false,
                            createdAt: new Date().toISOString(),
                        },
                    ],
                })),

            toggleTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                })),

            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),

            editTask: (id, newTitle) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, title: newTitle } : task
                    ),
                })),

            clearTasks: () =>
                set(() => ({
                    tasks: [],
                })),

            clearCompletedTasks: () => {
                set(state => ({
                    tasks: state.tasks.filter(task => !task.completed)
                }));
            },

            clearUncompletedTasks: () => {
                set(state => ({
                    tasks: state.tasks.filter(task => task.completed)
                }));
            },
        }),
        {
            name: 'todo-tasks',
        }
    )
);
