import { TaskItem } from "../entities/task/ui/TaskItem";
import {ClearTasksButton} from "../features/clear-tasks/ClearTasksButton.tsx";
import {useTasksStore} from "../entities/task/model/useTasksStore.ts";

export default function UncompletedTasksPage() {
    const tasks = useTasksStore((state) => state.tasks);
    const uncompletedTasks = tasks.filter((task) => !task.completed);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Невыполненные задачи</h1>
            <div className="mb-4">
                {uncompletedTasks.length>0 && <ClearTasksButton/>}
            </div>

            <ul className="space-y-2">
                {uncompletedTasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
