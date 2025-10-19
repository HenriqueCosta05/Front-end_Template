import { TodoProvider } from ".";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <TodoProvider>
            {children}
        </TodoProvider>
    );
}