import './TodoCard.style.css'
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../Context/TodoContext";
import TodoItems from "../TodoItems/TodoItems";
import {useParams} from "react-router-dom";

const TodoCard = () => {
    const {todoList, dispatch} = useContext(TodoContext)
    const [item, setItem] = useState(
        {
            id: '',
            name: " ",
            description: "",
            items:
                [
                    {
                        id: '',
                        title: "",
                        status: false
                    }
                ]
        }
    )
    const [task, setTask] = useState(
        {
            id: '',
            title: "",
            status: false
        }
    )

    const params = useParams()


    const handleAddTodoItems = (e) => {
        e.preventDefault()
        const id = item.id
        dispatch({type: "AddTodoItems", payload: {id, task}})

        setTask({
            id: '',
            title: "",
            status: false
        })

    }


    const handleChangeItems = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setItem(todoList.filter(todo => todo.id === Number(params.id))[0])
    }, [todoList, params.id])

    return (
        <div className={'Container'}>

            <div className={'todoCard'}>

                <div className={'Title'}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>

                <div className={'ItemAddButton'}>
                    <form onSubmit={handleAddTodoItems}>
                        <input onChange={(e) => handleChangeItems(e)} name={'title'}
                               value={task.title} className="name formEntry" placeholder={"Add items..."}/>
                        <button class="add formEntry" >add</button>
                    </form>
                </div>



                <TodoItems item={item}/>

            </div>
        </div>
    )
}

export default TodoCard;