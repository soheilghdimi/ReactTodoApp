import './TodoChecklist.style.css'
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import TodoItems from "../todoItems/TodoItems";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const TodoChecklist = () => {
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
        <div className={'container'}>
            <Link className="backBtn" to={"/"}>
                <ArrowBackIosNewIcon sx={{color: 'white', fontSize: "40px"}}/>
            </Link>
            <div className={'title'}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
            </div>
            <div className={'todoCard'}>

                <div className={'formBox'}>
                    <form style={{display: "flex"}}>
                        <input onChange={e => handleChangeItems(e)}
                               className="name formEntry" placeholder={"Add items..."} name={'title'}
                               value={task.title}/>
                        <img onClick={handleAddTodoItems} className="add formEntry"
                             src="https://img.icons8.com/ios-filled/50/ffffff/plus-2-math.png"
                             alt={"Add"}/>
                    </form>
                </div>
                <TodoItems item={item}/>
            </div>
        </div>
    )
}

export default TodoChecklist;
