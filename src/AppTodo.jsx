import './App.css'
import { useState } from 'react';
import TodoList from './components/todo/TodoList';
const AppTodo = () =>{
const [todos,setTodos] = useState(
    [
        {id:0,text:'개발공부하기',done: false},
        {id:1,text:'JAVA공부',done: false}
]); 
const [todoText,setTodoText]= useState('');
const [insertAt,setInsertAt] = useState(todos.length-1);
const handleAddTodo = (e) =>{
    const nextId = todos.length+1;
    setTodos(
        [
        ...todos,
        {
            id: nextId,
            text: todoText,
            done: false
        }
    ]
    )
    setTodoText(''); //null or undefined [x]
  
}

const handleTodoText = (e) =>{
    setTodoText(e.target.value)
}
const handleDeleteItem = (deleteId) => {
    setTodos(todos.filter(item => item.id !== deleteId))
}
const handleKeyPreeEnter = (e) =>{
    if(e.key === 'Enter'){ //또는 keyCode ==== 13
    handleAddTodo();
}
}
const handleToggleTodo = (id, done) =>{

    const newTods = todos.map((item) => {
        if(item.id === id){
         return {
            ...item,
            done
         }
        }else{
            return item;
        }
    })

    setTodos(newTods);
    
}

const handleChangeSelect = (e) => {
    setInsertAt( e.target.value);
}
const handleAddSelect = (e) =>{
    const nextId = todos.length+1;
    
   setTodos([
    //사입지점 이전 항목
    ...todos.slice(0,insertAt),
    {id:nextId,text:todoText,done:false},
    ...todos.slice(insertAt)
]
);
    setTodoText(''); //null or undefined [x]
  
}

const handleReverseList = () =>{
    // const reverseTodos = [...todos];
    // reverseTodos.reverse();
    // setTodos(reverseTodos);
    setTodos(todos => todos.toReversed())
}
    return (
        <div>
            <h2>할일목록</h2>
            <div>
            <input type="text" value={todoText} onChange={handleTodoText}  onKeyUp={handleKeyPreeEnter} />
            <button onClick={handleAddTodo}>추가</button>
            </div>
            <div>
                <select value={insertAt} onChange={handleChangeSelect}>
                    {
                        todos.map((_,index) => (
                            <option key={index} value={index}>{index}번째</option>
                        ))
                    }
                </select>
                <button onClick={handleAddSelect}>{insertAt}번재 추가</button>
            </div>
            <div>
                preview : {todoText}
            </div>
            <button onClick={handleReverseList}>Reverse</button>
            <TodoList todos={todos} onDeleteItem={handleDeleteItem} onToggleTodo={handleToggleTodo} />
        </div>
    )
}

export default AppTodo;