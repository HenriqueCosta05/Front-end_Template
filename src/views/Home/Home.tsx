import {
    Cell,
    Column,
    Group,
    Row,
    Table,
    TableBody,
    TableHeader,
} from 'react-aria-components'
import homeStyles from './Home.module.css'
import { useTodo } from '../../hooks'
import { useEffect } from 'react'
import { mockAPI } from '../../services/API'
import type { Todo } from '../../@types'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { todos, setTodos } = useTodo()
    const { t } = useTranslation()
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await mockAPI.get<Todo[]>('/todos.json')
            setTodos(response.data)
        }
        fetchTodos()
    }, [])

    return (
        <Group className={homeStyles.container}>
            <h1 className={homeStyles.h1}>{t('home.title')}</h1>
            <p className={homeStyles.paragraph}>{t('home.description')}</p>
            <Table className={homeStyles.table} aria-labelledby="table-label">
                <TableHeader className={homeStyles.tableHeader}>
                    <Column isRowHeader>{t('home.table.id')}</Column>
                    <Column>{t('home.table.task')}</Column>
                    <Column>{t('home.table.status')}</Column>
                </TableHeader>
                <TableBody>
                    {todos.map((todo) => (
                        <Row key={todo.id} className={homeStyles.tableRow}>
                            <Cell className={homeStyles.tableCell}>
                                {todo.id}
                            </Cell>
                            <Cell className={homeStyles.tableCell}>
                                {todo.title}
                            </Cell>
                            <Cell className={homeStyles.tableCell}>
                                {todo.completed ? 'Yes' : 'No'}
                            </Cell>
                        </Row>
                    ))}
                </TableBody>
            </Table>
        </Group>
    )
}
