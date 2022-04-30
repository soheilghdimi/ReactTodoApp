import {useContext} from "react";
import './TodoList.style.css'
import {TodoContext} from "../context/TodoContext";
import PreviewTodoCard from "../todoCardPreview/PreviewTodoCard";
import {useNavigate, Outlet} from "react-router-dom"

function TodoList() {
    const {todoList} = useContext(TodoContext);
    const navigate = useNavigate()
    const handleAddTodoList = () => {
        navigate('/Add')
    }
    return (
        <div>
            <div className="todoWallpaper"/>
                <h1 className="todoTitle">T O D O App</h1>

            <Outlet/>
            <div className="todoList">
                {todoList.map(todo => (
                    <PreviewTodoCard todo={todo} key={todo.id}/>
                ))}
            </div>
            <div className="wrapper">
                <button className="icon add" onClick={handleAddTodoList}>
                    <span className="tooltip">AddTodo</span>
                    <span className="plus">+</span>
                </button>
            </div>
        </div>
    )
}
export default TodoList