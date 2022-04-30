import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoContextProvider from "./components/context/TodoContext";
import TodoAddForm from "./components/todoAddForm/TodoAddForm";
import TodoList from "./components/todoList/TodoList";
import TodoChecklist from "./components/todoChecklist/TodoChecklist";

const App = () => {
    return (
        <TodoContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<TodoList/>}>
                        <Route path={'/Add'} element={<TodoAddForm/>}/>
                    </Route>
                    <Route path={'todoCards/:id'} element={<TodoChecklist/>}/>
                </Routes>
            </BrowserRouter>
        </TodoContextProvider>
    )
}

export default App;