import {Button} from "react-aria-components";
import {DeleteIcon} from "../../shared/ui/icons/DeleteIcon.tsx";
import {useTasksStore} from "../../entities/task/model/useTasksStore.ts";

export function DeleteTaskButton({ taskId }: { taskId: string }) {
    const deleteTask = useTasksStore((state) => state.deleteTask);

    return (
        <Button
            onClick={() => deleteTask(taskId)}
            className="text-red-500 hover:text-red-700 w-full"
            aria-label="Удалить задачу"
        >
            <DeleteIcon className="text-red-500 hover:text-red-700 cursor-pointer" />
        </Button>
    );
}
