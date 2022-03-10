import {makeUniqueId} from "../TodoList/data";

function Reducer(state, action) {
    const {type, payload} = action
    switch (type) {
        case "AddTodo" :
            return (
                    [...state, {...payload.todo,id:makeUniqueId()}]
            )
        case "DeleteTodoList":
            return (
                state.filter(todos => todos.id !== payload.id)
            )
        case "AddTodoItems":
            return (
                state.map(item => item.id === payload.id ? {
                    ...item, items: [...item.items,
                        {
                            ...payload.task,
                            id: makeUniqueId(),
                            }]
                } : item)
            )
        case "DeleteTodoItems" :
            return (
                state.map(item => item.id === payload.todoId ?
                    {
                        ...item, items: item.items.filter(item => item.id !== payload.itemId)
                    }
                    : item)
            )
        case "UpdateTodoItemsStatus" :
            return (
                state.map((todo) => todo.id === payload.todoId ?
                    {
                        ...todo,
                        items: todo.items.map((item) =>
                            item.id === payload.itemId
                                ? {...item, status: payload.checked}
                                : item
                        )

                    } : todo)
            )
        default : return state;
    }

}

export default Reducer;