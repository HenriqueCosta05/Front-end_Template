import { createContext } from 'react'
import type { TodoContextType } from '../@types'

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export default TodoContext
