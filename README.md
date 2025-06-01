# Todo App

Простое приложение для управления задачами (Todo App), реализованное с использованием архитектуры FSD (Feature-Sliced Design).

## Стек технологий

- React 19 + TypeScript
- Vite
- Zustand (для стейт-менеджмента)
- React Hook Form
- React Aria Components (доступные UI-компоненты)
- Radix UI Dialog
- TailwindCSS
- Vitest (юнит-тесты)
- Playwright (e2e тесты)

## Возможности

✅ Добавление задач  
✅ Отметка задач как выполненные  
✅ Редактирование задач  
✅ Удаление задач  
✅ Фильтрация по статусу (все / выполненные / невыполненные)  
✅ Сохранение задач в LocalStorage  
✅ Полностью адаптивный интерфейс  
✅ Поддержка доступности (через React Aria Components)

## Запуск проекта

```bash
# Установка зависимостей
npm install
```
```bash
# Запуск проекта в dev-режиме
npm run start
```

## Сборка проекта

```bash
npm run build
```

## Тестирование

### Юнит-тесты

```bash
npm run test
```

### E2E тесты (Playwright)

```bash
# Установка браузеров для Playwright
npx playwright install
```

```bash
# Запуск e2e тестов
npm run test:e2e
```