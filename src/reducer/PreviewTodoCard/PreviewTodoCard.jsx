import './PreviewTodoCard.style.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContext";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PreviewTodoCard = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const handleDeleteTodoList = (id) => {
        dispatch({type: "DeleteTodoList", payload: {id}})
    }
    return (
        <div className={'PreviewTodoCard'}>
            <Button variant="danger" className={'deleteButton'} onClick={() => handleDeleteTodoList(todo.id)}>
                <img src="https://img.icons8.com/material-outlined/24/000000/delete-property.png"
                     alt={'deleteTodoList'}/>
            </Button>
            <Card border="info" style={{
                width: '18rem',
                height: '10rem',
                margin: '10px',
                backgroundColor: 'rgba(130, 182, 154, 0.2)'
            }}>
                <Card.Header style={{fontSize: '25px'}}>{todo.name}</Card.Header>
                    <Card.Title style={{margin:"20px"}}>{todo.description}</Card.Title>
            </Card>
            <Link to={`todoCards/${todo.id}`}>
                <Button variant="outline-secondary">CheckList</Button>
            </Link>
        </div>
    )
}

export default PreviewTodoCard;