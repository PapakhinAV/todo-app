import { ToggleTaskCheckbox } from "../../../features/toggle-task/ToggleTaskCheckbox";
import { EditTaskDialogTrigger } from "../../../features/edit-task/EditTaskDialogTrigger";
import { DeleteTaskButton } from "../../../features/delete-task/DeleteTaskButton";
import type { Task } from "../model/types";

export const TaskItem = ({ task }: { task: Task }) => {
    return (
        <div className="flex items-center justify-between p-2 border rounded mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-1 min-w-0">
                <ToggleTaskCheckbox taskId={task.id} completed={task.completed} />
                <span className={`break-all ${task.completed ? "line-through text-gray-500" : ""}`}>
                    {task.title}
                </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
                <EditTaskDialogTrigger task={task} />
                <DeleteTaskButton taskId={task.id} />
            </div>
        </div>
    );
};
