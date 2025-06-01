import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.evaluate(() => localStorage.clear());
    });

    test('Добавление задачи', async ({ page }) => {
        await page.getByPlaceholder('Введите задачу').fill('Test task');
        await page.getByRole('button', { name: 'Добавить' }).click();

        await expect(page.getByText('Test task')).toBeVisible();
    });

    test('Отметить задачу как выполненную', async ({ page }) => {
        await page.getByPlaceholder('Введите задачу').fill('Complete task');
        await page.getByRole('button', { name: 'Добавить' }).click();

        const checkbox = page.getByRole('checkbox');
        await checkbox.check();

        await expect(checkbox).toBeChecked();
    });

    test('Удаление задачи', async ({ page }) => {
        await page.getByPlaceholder('Введите задачу').fill('Delete me');
        await page.getByRole('button', { name: 'Добавить' }).click();

        await page.getByRole('button', { name: /Удалить/i }).click();

        await expect(page.getByText('Delete me')).not.toBeVisible();
    });
});
