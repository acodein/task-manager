# Task Manager

A React task manager built while learning React fundamentals.

## Features

- Add tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by status
- Search tasks
- Persist tasks using localStorage

## React Concepts

This project helped me practice:

- Components and props
- useState
- useEffect
- useReducer
- Custom hooks
- Controlled inputs
- Conditional rendering
- Lists and keys
- Derived state
- Immutable state updates
- localStorage
- State management with reducer + actions

## State Architecture

The application uses `useReducer` to manage the tasks state.

```text
User action
    ↓
dispatch(action)
    ↓
taskReducer
    ↓
new state
    ↓
React re-renders
    ↓
useEffect
    ↓
localStorage