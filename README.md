
# Задание 2: Список задач (To-Do List) на React

## Описание проекта
Ты создашь приложение "Список задач", где пользователь может добавлять и удалять задачи, отмечать их как выполненные, а также видеть общее количество задач и завершённых. Для стилизации приложения ты будешь использовать CSS-модули.

## Цели
- Научиться работать с массивами в состоянии.
- Освоить рендеринг списков с использованием `map()`.
- Использовать условный рендеринг.
- Освоить передачу данных и функций через `props`.
- Научиться работать с CSS-модулями для стилизации компонентов.

## Что стоит прочитать
Перед началом изучи следующие материалы:
1. **Рендеринг списков**:
   - [Документация по рендерингу списков](https://ru.legacy.reactjs.org/docs/lists-and-keys.html)
   
2. **Условный рендеринг**:
   - [Документация по условному рендерингу](https://ru.reactjs.org/docs/conditional-rendering.html)   

3. **CSS-модули**:
   - [CSS-модули в React](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
    
4. **Пропсы (Props)**:
   - [Документация по пропсам](https://ru.reactjs.org/docs/components-and-props.html)
   - Пропсы позволяют передавать данные от родительского компонента к дочернему и являются неизменяемыми.
---

## Инструкции по выполнению задания

1. **Создай компонент `ToDoList`**:
   - В папке `src` создай новый файл `ToDoList.js`.
   - Напиши функциональный компонент, использующий `useState` для управления состоянием списка задач.

2. **Создание нового состояния для задач**:
   - Используй `useState` для создания массива задач.
   - Каждая задача должна быть объектом с полями:
     - `id` (уникальный идентификатор),
     - `text` (текст задачи),
     - `isCompleted` (логическое значение, завершена задача или нет).

3. **Разделение на компоненты и передача `props`**:
   - Вынеси части функционала в отдельные компоненты:
     - `ToDoItem`: отображает задачу, принимает данные задачи и функции для удаления и отметки как выполненной через `props`.
     - `TaskInput`: компонент для добавления новой задачи, который принимает и передаёт текст задачи в `ToDoList`.

4. **Использование CSS-модулей**:
   - Создай CSS-модули для каждого компонента, чтобы стилизовать их локально и избежать конфликта стилей.
   - Пример: создайте файл `ToDoList.module.css` и импортируй его в `ToDoList.js`.
   - Используй CSS-модули для изменения стиля задачи в зависимости от её состояния.

5. **Условный рендеринг элемента**:
   - В компоненте ToDoList создайте условный рендеринг для отображения сообщения «Все задачи выполнены!» только если все задачи в списке завершены.
   - Если хотя бы одна задача не выполнена, этот элемент не должен рендериться (возвращать null).

---
