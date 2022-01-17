import TodoList from "../TodoList/TodoList";
import TodoContextProvider from "../Context/TodoContext";

const TodoListContainer = () => {
    return(
        <TodoContextProvider>
            <TodoList/>
        </TodoContextProvider>
    )
}
export default TodoListContainer;