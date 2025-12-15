import { useState } from "react";
import { useTodos, useDispatch } from "../../context/TodoContext";
const AddTodo = () =>{
    const [todoText,setTodoText]= useState('');

    const dispatch = useDispatch()
    const todos = useTodos();
    //1] Added
    const handleAddTodo = (todoText) =>{
        dispatch({type: 'added', nextId: todos.length, todoText: todoText});
    }


    return (
        <div>
            <input type="text" value={todoText} 
            onChange={(e) => setTodoText(e.target.value)}  
            onKeyUp={(e) => {
                if(e.key === 'Enter' && e.nativeEvent.isComposing === false){ //또는 keyCode ==== 13
                    handleAddTodo(todoText);
                    setTodoText('');
                }
            }} />
            <button onClick={() => {
                //저장
                handleAddTodo(todoText);
                setTodoText('');
            }}>추가</button>
        </div>
    )
}

export default AddTodo;