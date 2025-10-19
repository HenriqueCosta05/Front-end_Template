export type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

export type TodoState = {
    todos: Todo[];
    selectedTodoId: string | undefined;
};

export type TodoAction =
    | { type: 'SET_TODOS'; payload: Todo[] }
    | { type: 'SET_SELECTED_TODO_ID'; payload: string | undefined };

export type TodoActionCreators = {
    setTodos: (todos: Todo[]) => void;
    setSelectedTodoId: (id: string | undefined) => void;
};

export type TodoContextType = TodoState & TodoActionCreators;