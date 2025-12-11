import './App.css'
import { useState } from 'react';
import TodoList from './components/todo/TodoList';
const AppTodo = () =>{
const [todos,setTodos] = useState(
    [
        {id:0,label:'개발공부하기'},
        {id:1,label:'JAVA공부'}
]); 

    return (
        <div>
            <h2>할일목록</h2>
            <TodoList todos={todos} />
            <TodoList todos={todos} />
        </div>
    )
}

export default AppTodo;