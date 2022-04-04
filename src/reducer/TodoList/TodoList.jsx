import {useContext} from "react";
import './TodoList.style.css'
import {TodoContext} from "../Context/TodoContext";
import PreviewTodoCard from "../PreviewTodoCard/PreviewTodoCard";
import {useNavigate,Outlet} from "react-router-dom"
import {Button} from "@mui/material";

function TodoList() {
    const {todoList} = useContext(TodoContext);
    const navigate = useNavigate()
    const handleAddTodoList = () => {
        navigate('/Add')
    }

    return (
        <div>

            <div className={'AddButton'}>
                <Button color="success" variant="outlined" onClick={handleAddTodoList}>
                    Add Todo
                </Button>
            </div>
            <Outlet/>
                <div className="TodoList">
                    {todoList.map(todo => (
                        <PreviewTodoCard todo={todo} key={todo.id}/>
                    ))}
                </div>
        </div>
    )
}

export default TodoList