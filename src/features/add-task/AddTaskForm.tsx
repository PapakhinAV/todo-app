import { useForm } from "react-hook-form";
import { TextField, Input, Label, Button } from "react-aria-components";

type AddTaskFormData = {
    title: string;
};

type AddTaskFormProps = {
    onAddTask: (title: string) => void;
};

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
    const { register, handleSubmit, reset } = useForm<AddTaskFormData>();

    const onSubmit = (data: AddTaskFormData) => {
        onAddTask(data.title);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-4 mb-6">
            <TextField className="flex-1">
                <Label className="sr-only">Новая задача</Label>
                <Input
                    placeholder="Введите задачу"
                    {...register("title", { required: true })}
                    className="border px-3 py-2 w-full rounded"
                />
            </TextField>

            <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Добавить
            </Button>
        </form>
    );
}
