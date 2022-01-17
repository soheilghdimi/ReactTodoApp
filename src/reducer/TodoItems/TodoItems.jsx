import './TodoItems.style.css'
import {useContext} from "react";
import {TodoContext} from "../Context/TodoContext";
import {Button} from "react-bootstrap";

const TodoItems = ({item}) => {
    const {dispatch} = useContext(TodoContext)

    const handleDeleteTodoItems = (todoId, itemId) => {
        dispatch({type: "DeleteTodoItems", payload: {todoId, itemId}})
    };
    const handleUpdateTodoItemsStatus = (todoId, itemId, e) => {
        dispatch({type: "UpdateTodoItemsStatus", payload: {todoId, itemId, checked: e.target.checked}})
    };
    return (
        item.items.map((i) => (

            <div className={'TodoItems'} key={`${i.id}-${i.id}`}>

                <div>
                    <input onChange={(e) => handleUpdateTodoItemsStatus(item.id, i.id, e)}
                           type="checkbox"
                           checked={item.status}
                           id={`${item.id} + ${i.id}`}/>
                    <label
                        style={{
                            color: i.status === true ? 'green' : 'white',
                            textDecoration: i.status === true ? 'line-through' : 'none'
                            , marginLeft: '5px'
                        }}
                        htmlFor={`${item.id} + ${i.id}`}>{i.title}</label>
                </div>

                <Button variant="danger" onClick={() => handleDeleteTodoItems(item.id, i.id)}>

                    <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png"
                        alt={""}/>
                </Button>
            </div>

        ))
    )
}
export default TodoItems;