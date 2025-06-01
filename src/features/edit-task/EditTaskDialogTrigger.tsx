import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import type { Task } from '../../entities/task/model/types';
import { useForm } from 'react-hook-form';
import { Button } from 'react-aria-components';
import { EditIcon } from "../../shared/ui/icons/EditIcon.tsx";
import { useTasksStore } from "../../entities/task/model/useTasksStore.ts";

export function EditTaskDialogTrigger({ task }: { task: Task }) {

    const editTask = useTasksStore((state) => state.editTask);
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, reset } = useForm<{ title: string }>({
        defaultValues: { title: task.title },
    });

    const onSubmit = (data: { title: string }) => {
        editTask(task.id, data.title);
        setOpen(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <Button
                    onPress={() => {
                        reset({ title: task.title });
                    }}
                    className="text-blue-500 w-full"
                >
                    <EditIcon className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
                <Dialog.Content
                    className="
                        bg-white p-6 rounded shadow-lg max-w-sm w-full
                        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                    "
                >
                    <Dialog.Title className="text-lg font-bold mb-4">
                        Редактировать задачу
                    </Dialog.Title>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-4"
                    >
                        <input
                            {...register('title', { required: true })}
                            className="border p-2 w-full"
                            autoFocus
                        />
                        <div className="flex justify-end gap-2">
                            <Dialog.Close asChild>
                                <Button className="px-4 py-2 bg-gray-200 rounded">
                                    Отмена
                                </Button>
                            </Dialog.Close>
                            <Button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                            >
                                Сохранить
                            </Button>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

