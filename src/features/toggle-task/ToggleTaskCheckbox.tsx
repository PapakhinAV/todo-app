import {useTasksStore} from "../../entities/task/model/useTasksStore.ts";

export function ToggleTaskCheckbox({ taskId, completed }: { taskId: string; completed: boolean }) {
    const toggleTask = useTasksStore((state) => state.toggleTask);

    return (
        <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTask(taskId)}
            className="w-5 h-5 cursor-pointer"
        />
    );
}
