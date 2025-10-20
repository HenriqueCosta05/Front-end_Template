import { useCallback, useMemo, useReducer } from 'react'
import type { TodoAction, TodoState } from '../@types'
import TodoContext from '../contexts/TodoContext'

const initialTodoState: TodoState = {
    todos: [],
    selectedTodoId: undefined,
}

export const reducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'SET_TODOS': {
            return { ...state, todos: action.payload }
        }
        case 'SET_SELECTED_TODO_ID': {
            return { ...state, selectedTodoId: action.payload }
        }
        default: {
            return state
        }
    }
}

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialTodoState)

    const setTodos = useCallback((todos: TodoState['todos']) => {
        dispatch({ type: 'SET_TODOS', payload: todos })
    }, [])

    const setSelectedTodoId = useCallback((id: string | undefined) => {
        dispatch({ type: 'SET_SELECTED_TODO_ID', payload: id })
    }, [])

    const contextValue = useMemo(
        () => ({
            ...state,
            setTodos,
            setSelectedTodoId,
        }),
        [state, setTodos, setSelectedTodoId]
    )

    return (
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}
