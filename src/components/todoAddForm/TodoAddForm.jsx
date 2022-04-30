import './TodoAddForm.style.css'
import {useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {useNavigate} from "react-router-dom";

const TodoAddForm = () => {
    const {dispatch} = useContext(TodoContext);
    const [todo, setTodo] = useState(
        {
            name: '',
            description: '',
            items: []
        }
    )
    const navigate = useNavigate()
    const handleAddTodo = (e) => {
        e.preventDefault()
        if (todo.name === "" || todo.description === "") {
            alert("Please fill in the blank")
        } else {
            dispatch({type: "AddTodo", payload: {todo}})
        }
        setTodo(
            {
                name: '',
                description: '',
                items: [],
            }
        )
    }
    const handleChange = (e) => {
        setTodo({...todo, [e.target.name]: e.target.value})
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div className="form">
                <div style={{display: "flex", justifyContent: 'flex-end'}}>
                    <button className="deleteBtn" onClick={() => navigate('/')}>
                        <img className={"deleteImg"} src="https://img.icons8.com/fluency/48/000000/delete-sign.png"
                             alt={'DeleteButton'}/>
                    </button>
                </div>
                <form onSubmit={handleAddTodo}>
                    <div className="input-container ic1">
                        <input className="input" onChange={handleChange} id='name' name={'name'}
                               value={todo.name}/>
                        <div className="cut">{}</div>
                        <label className="placeholder">name</label>
                    </div>
                    <div className="input-container ic2">
                        <input className="input" onChange={handleChange} id='description' name={'description'}
                               value={todo.description}/>
                        <div className="cut">{}</div>
                        <label className="placeholder">description</label>
                    </div>
                    <button type="text" className="submit">submit</button>
                </form>
            </div>
        </div>
    )
}
export default TodoAddForm;