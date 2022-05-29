import './TodoItems.style.css'
import {useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {Button, Checkbox} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import styled from "@emotion/styled";

const FilterButton = styled(Button)`
  margin: 20px;
  color: #617766;

  :hover {
    color: #0c100d;
  }

  :focus {
    color: #0c100d;
  }
`
const TodoItems = ({item}) => {
    const {dispatch} = useContext(TodoContext)
    const [filter, setFilter] = useState(null)
    const handleDeleteTodoItems = (todoId, itemId) => {
        dispatch({type: "DeleteTodoItems", payload: {todoId, itemId}})
    };
    const handleUpdateTodoItemsStatus = (todoId, itemId, e) => {
        dispatch({type: "UpdateTodoItemsStatus", payload: {todoId, itemId, checked: e.target.checked}})
    };

    return (
        <div className="itemsContainer">
            <div className="itemsBox">
                {
                    item.items.filter(i => i.status === filter || filter === null).map((checklistItem) => (
                        <div className={'todoItems'}
                             key={`${checklistItem.id}-${checklistItem.id}`}>
                            <div className={"items"}>
                                <Checkbox
                                    checked={checklistItem.status}
                                    onChange={(e) => handleUpdateTodoItemsStatus(item.id, checklistItem.id, e)}
                                    id={`${item.id} + ${checklistItem.id}`}
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
                                        color: checklistItem.status === true ? 'gray' : 'black',
                                        textDecoration: checklistItem.status === true ? 'line-through' : 'none'
                                        , marginLeft: '5px'
                                    }}
                                    htmlFor={`${item.id} + ${checklistItem.id}`}>{checklistItem.title}</label>
                            </div>
                            <div className={"deleteIcon"}>
                                <img onClick={() => handleDeleteTodoItems(item.id, checklistItem.id)}
                                     src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/28/000000/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png"
                                     alt={""}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="itemsRemain">
                <h5>
                    {item.items.filter(item => item.status === false).length} items left
                </h5>
            </div>

            <div className="filterButtons">
                <FilterButton onClick={() => setFilter(null)}>All</FilterButton>
                <FilterButton onClick={() => setFilter(false)}>active</FilterButton>
                <FilterButton onClick={() => setFilter(true)}>complete</FilterButton>
            </div>
        </div>
    )
}
export default TodoItems;