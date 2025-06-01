import { TaskItem } from "../entities/task/ui/TaskItem";
import {ClearTasksButton} from "../features/clear-tasks/ClearTasksButton.tsx";
import {useTasksStore} from "../entities/task/model/useTasksStore.ts";

export default function CompletedTasksPage() {
    const tasks = useTasksStore((state) => state.tasks);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Выполненные задачи</h1>
            <div className="mb-4">
                {completedTasks.length > 0 && <ClearTasksButton/>}
            </div>
            <ul className="space-y-2">
                {completedTasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
