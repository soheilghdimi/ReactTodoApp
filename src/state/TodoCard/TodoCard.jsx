import TodoItems from "../TodoItems/TodoItems";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContext";
import {makeUniqueId} from "../TodoList/data";


const TodoCard = ({todo}) => {
    const {todoList, setTodoList} = useContext(TodoContext)

    const handleDeleteTodoList = (id) => {
        setTodoList(todoList.filter(todos => todos.id !== id))
    }

    const handleAddTodoItems = (id) => {
        const title = prompt("please enter title")
        setTodoList(todoList.map(item => item.id === id ? {
            ...item, items: [...item.items, {id: makeUniqueId(), title, status: false}]
        } : item))
    }

  return (
      <div className={'todoList'} key={todo.id}>
          <button onClick={() => handleDeleteTodoList(todo.id)}>delete</button>
          <h1>{todo.name}</h1>
          <p>{todo.description}</p>

          <TodoItems
              todo={todo}
          />

          <button onClick={() => handleAddTodoItems(todo.id)} style={{marginTop: '15px'}}>Add Item
          </button>
      </div>
  )
}
export default TodoCard;