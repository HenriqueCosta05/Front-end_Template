import { Cell, Column, Group, Row, Table, TableBody, TableHeader } from "react-aria-components";
import homeStyles from "./Home.module.css";
import { useTodo } from "../../hooks";
import { useEffect } from "react";
import { mockAPI } from "../../services/API";
import type { Todo } from "../../@types";

export default function Home() {
  const { todos, setTodos } = useTodo();

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await mockAPI.get<Todo[]>("/todos.json");
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  return (
    <Group className={homeStyles.container}>
      <h1 className={homeStyles.h1}>TODO List</h1>
      <p className={homeStyles.paragraph}>
        A simple and clean way to manage your tasks.
      </p>
      <Table className={homeStyles.table} aria-labelledby="table-label">
        <TableHeader className={homeStyles.tableHeader}>
          <Column isRowHeader>ID</Column>
          <Column>Title</Column>
          <Column>Completed</Column>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <Row key={todo.id} className={homeStyles.tableRow}>
              <Cell className={homeStyles.tableCell}>{todo.id}</Cell>
              <Cell className={homeStyles.tableCell}>{todo.title}</Cell>
              <Cell className={homeStyles.tableCell}>{todo.completed ? "Yes" : "No"}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </Group>
  )
}
