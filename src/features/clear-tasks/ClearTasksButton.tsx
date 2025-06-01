import { useTasksStore } from "../../entities/task/model/useTasksStore";
import { useLocation } from "react-router-dom";

export function ClearTasksButton() {
    const location = useLocation();

    const {
        tasks,
        clearTasks,
        clearCompletedTasks,
        clearUncompletedTasks
    } = useTasksStore();

    let filteredTasks = tasks;
    let clearHandler = clearTasks;

    if (location.pathname === "/completed") {
        filteredTasks = tasks.filter(t => t.completed);
        clearHandler = clearCompletedTasks;
    } else if (location.pathname === "/uncompleted") {
        filteredTasks = tasks.filter(t => !t.completed);
        clearHandler = clearUncompletedTasks;
    }

    if (filteredTasks.length === 0) return null;

    return (
        <button
            onClick={clearHandler}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full md:w-auto"
        >
            Очистить задачи
        </button>
    );
}
