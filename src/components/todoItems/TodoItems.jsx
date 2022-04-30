import './TodoItems.style.css'
import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import {Checkbox} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

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
            <div className={'TodoItems'}
                 key={`${i.id}-${i.id}`}>
                <div className={"items"}>
                    <Checkbox
                        checked={item.status}
                        onChange={(e) => handleUpdateTodoItemsStatus(item.id, i.id, e)}
                        id={`${item.id} + ${i.id}`}
                        icon={<RadioButtonUncheckedIcon/>}
                        checkedIcon={<RadioButtonCheckedIcon/>}
                        sx={{
                            color: "#e66465",
                            '&.Mui-checked': {
                                color: "#46b924",
                            },
                        }}
                    />
                    <label
                        style={{
                            color: i.status === true ? 'gray' : 'black',
                            textDecoration: i.status === true ? 'line-through' : 'none'
                            , marginLeft: '5px'
                        }}
                        htmlFor={`${item.id} + ${i.id}`}>{i.title}</label>
                </div>
                <div className={"deleteIcon"}>
                    <img onClick={() => handleDeleteTodoItems(item.id, i.id)}
                         src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/28/000000/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png"
                         alt={""}/>
                </div>
            </div>

        ))
    )
}
export default TodoItems;