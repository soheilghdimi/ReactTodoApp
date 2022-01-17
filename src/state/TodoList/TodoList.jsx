import {useContext} from "react";
import {makeUniqueId} from "./data";
import './TodoList.style.css'
import TodoCard from "../TodoCard/TodoCard";
import {TodoContext} from "../Context/TodoContext";


function TodoList() {
    const {todoList, setTodoList} = useContext(TodoContext);

    const handleAddTodoList = () => {
        const name = prompt("enter name");
        const description = prompt("enter dec")
        setTodoList([...todoList, {id: makeUniqueId(), name, description, items: []}])
    }

    return (
        <div className="TodoList">
            {todoList.map((todo)=> (
                <TodoCard
                    key={todo.id}
                    todo={todo}/>
            ))}
            <div>
                <button onClick={handleAddTodoList}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodoList