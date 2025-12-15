import './App.css'
import TodoList from './components/todo/TodoList';
import AddTodo from './components/todo/AddTodo';
import { TodoContextProvider } from './context/TodoContext';
const AppTodo = () =>{
    return (
        <TodoContextProvider>
            <h2>할일목록</h2>
            <AddTodo></AddTodo>
            <TodoList />
        </TodoContextProvider>
    )
}

export default AppTodo;