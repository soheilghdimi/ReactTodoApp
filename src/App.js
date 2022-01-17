import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoContextProvider from "./reducer/Context/TodoContext";
import AddForm from "./reducer/AddForm/AddForm";
import TodoList from "./reducer/TodoList/TodoList";
import TodoCard from "./reducer/TodoCard/TodoCard";

const App = () => {
    return (
        <TodoContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<TodoList/>}>
                        {/*<Route index element={<></>}/>*/}
                        <Route path={'/Add'} element={<AddForm/>}/>
                    </Route>
                    <Route path={'todoCards/:id'} element={<TodoCard/>}/>
                </Routes>
            </BrowserRouter>
        </TodoContextProvider>
    )
}

export default App;