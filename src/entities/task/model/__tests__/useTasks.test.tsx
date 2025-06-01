import { beforeEach, describe, expect, it } from "vitest";
import { useTasksStore } from "../useTasksStore.ts";

describe("useTasksStore", () => {
    beforeEach(() => {
        localStorage.removeItem("todo-tasks");
        useTasksStore.setState({ tasks: [] });
    });

    it("добавляет задачу", () => {
        useTasksStore.getState().addTask("Test task");

        const tasks = useTasksStore.getState().tasks;
        expect(tasks).toHaveLength(1);
        expect(tasks[0].title).toBe("Test task");
    });

    it("отмечает задачу как выполненную", () => {
        useTasksStore.getState().addTask("Task to complete");
        const taskId = useTasksStore.getState().tasks[0].id;

        useTasksStore.getState().toggleTask(taskId);

        const updatedTask = useTasksStore.getState().tasks.find(t => t.id === taskId);
        expect(updatedTask?.completed).toBe(true);
    });

    it("редактирует задачу", () => {
        useTasksStore.getState().addTask("Old title");
        const taskId = useTasksStore.getState().tasks[0].id;

        useTasksStore.getState().editTask(taskId, "New title");

        const updatedTask = useTasksStore.getState().tasks.find(t => t.id === taskId);
        expect(updatedTask?.title).toBe("New title");
    });

    it("удаляет задачу", () => {
        useTasksStore.getState().addTask("Task to delete");
        const taskId = useTasksStore.getState().tasks[0].id;

        useTasksStore.getState().deleteTask(taskId);

        const tasks = useTasksStore.getState().tasks;
        expect(tasks).toHaveLength(0);
    });

    it("очищает все задачи", () => {
        useTasksStore.getState().addTask("Task 1");
        useTasksStore.getState().addTask("Task 2");

        useTasksStore.getState().clearTasks();

        const tasks = useTasksStore.getState().tasks;
        expect(tasks).toHaveLength(0);
    });
});
