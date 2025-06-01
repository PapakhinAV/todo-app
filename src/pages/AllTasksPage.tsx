import AddTaskForm from "../features/add-task/AddTaskForm";
import { TaskItem } from "../entities/task/ui/TaskItem";
import {ClearTasksButton} from "../features/clear-tasks/ClearTasksButton.tsx";
import {useTasksStore} from "../entities/task/model/useTasksStore.ts";

export default function AllTasksPage() {
    const tasks = useTasksStore((state) => state.tasks);
    const addTask = useTasksStore((state) => state.addTask);


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Все задачи</h1>
            <AddTaskForm onAddTask={addTask} />
            <div className="mb-4">
                <ClearTasksButton />
            </div>
            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

