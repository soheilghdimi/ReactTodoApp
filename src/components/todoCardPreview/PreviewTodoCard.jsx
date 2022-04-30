import './PreviewTodoCard.style.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import {Button} from "@mui/material";

const PreviewTodoCard = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const handleDeleteTodoList = (id) => {
        dispatch({type: "DeleteTodoList", payload: {id}})
    }
    return (
        <div className="previewContainer">
            <div className='previewTodoCard'>
                <div className="deleteButtonContainer">
                    <Button variant="contained" color="inherit" className='deleteButton' onClick={() => handleDeleteTodoList(todo.id)}>
                        <img src="https://img.icons8.com/material-outlined/24/000000/delete-property.png"
                             alt='deleteTodoList'/>
                    </Button>
                </div>
                <div className="detailBox">
                    <h2>{todo.name}</h2>
                    <hr/>
                    <h3>{todo.description}</h3>
                </div>
                <Link to={`todoCards/${todo.id}`}>
                    <Button variant="outlined">CheckList</Button>
                </Link>
            </div>
        </div>
    )
}

export default PreviewTodoCard;