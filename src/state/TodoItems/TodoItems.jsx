import {useContext} from "react";
import {TodoContext} from "../Context/TodoContext";

const TodoItems = ({todo}) => {
    const {todoList, setTodoList} = useContext(TodoContext)


    const handleDeleteTodoItems = (todoId, itemId) => {
        setTodoList(todoList.map(item => item.id === todoId ?
            {
                ...item, items: item.items.filter(item => item.id !== itemId)
            }
            : item))
    }

    const handleUpdateTodoItemsStatus = (todoId, itemId, e) => {
        setTodoList(todoList.map((todo) => todo.id === todoId ?
            {
                ...todo,
                items: todo.items.map((item) =>
                    item.id === itemId
                        ? {...item, status: e.target.checked}
                        : item
                )

            } : todo))
    }

    return (
        todo.items.map((item) => (
            <div key={item.id}>
                <button onClick={() => handleDeleteTodoItems(todo.id, item.id)}>delete</button>
                <input onChange={(e) => handleUpdateTodoItemsStatus(todo.id, item.id, e)} type="checkbox"
                       checked={item.status} id={`${todo.id} + ${item.id}`}/>
                <label htmlFor={`${todo.id} + ${item.id}`}>{item.title}</label>
            </div>
        ))


    )
}

export default TodoItems;