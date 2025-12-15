import './App.css'
import { useState, useReducer } from 'react';
import TodoList from './components/todo/TodoList';
import todoReducer from './reducer/todo-reducer';
import { useImmerReducer } from 'use-immer';

const AppTodo = () =>{

const [todoText,setTodoText]= useState('');
const [todos,dispatch] = useImmerReducer(todoReducer, [
    {id:0,text:'개발공부하기',done: false},
    {id:1,text:'JAVA공부',done: false}
]);
const [insertAt,setInsertAt] = useState(todos.length - 1);

//1] Added
const handleAddTodo = (e) =>{
    dispatch({type: 'added', nextId: todos.length, todoText: todoText});
    setTodoText(''); //null or undefined [x]
  
}

const handleTodoText = (e) =>{
    setTodoText(e.target.value)
}

//3] delete
const handleDeleteItem = (deleteId) => {
    dispatch({type:'deleted', deleteId: deleteId})
}
const handleAddTodoEnter = (e) =>{
    //한글 입력시 두번 입력 방지
    if(e.key === 'Enter' && e.nativeEvent.isComposing === false){ //또는 keyCode ==== 13
    handleAddTodo();
}
}

//4] done
const handleToggleTodo = (id, done) =>{
    dispatch({type: 'toggled', id: id, done: done});
}

const handleChangeSelect = (e) => {
    setInsertAt( e.target.value);
}

//2] added_index
const handleAddSelect = (e) =>{
dispatch({type : 'added-index', nextId: todos.length, todoText: todoText,insertAt: insertAt})
    setTodoText(''); //null or undefined [x]
  
}

//5] reverse
const handleReverseList = () =>{
    dispatch({type: 'reversed'});
}
    return (
        <div>
            <h2>할일목록</h2>
            <div>
            <input type="text" value={todoText} onChange={handleTodoText}  onKeyUp={handleAddTodoEnter} />
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