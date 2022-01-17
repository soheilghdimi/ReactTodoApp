import {useContext} from "react";
import './TodoList.style.css'
import {TodoContext} from "../Context/TodoContext";
import PreviewTodoCard from "../PreviewTodoCard/PreviewTodoCard";
import {useNavigate,Outlet} from "react-router-dom"


function TodoList() {
    const {todoList} = useContext(TodoContext);

    const navigate = useNavigate()

    const handleAddTodoList = () => {
        navigate('/Add')
    }

    return (
        <div>

            <div className={'AddButton'}>
                <button onClick={handleAddTodoList}>
                    Add Todo
                </button>
            </div>

                <div className="TodoList">
                    <Outlet/>
                    {todoList.map(todo => (
                        <PreviewTodoCard todo={todo} key={todo.id}/>
                    ))}
                </div>


        </div>

    )
}

export default TodoList