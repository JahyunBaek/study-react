import { useDispatch } from "../../context/TodoContext"
import { memo } from "react";
const TodoItem = memo(function TodoItem({item}){

    const dispatch = useDispatch()

//3] delete
const handleDeleteItem = (deleteId) => {
    dispatch({type:'deleted', deleteId: deleteId})
}


//4] done
const handleToggleTodo = (id, done) =>{
    dispatch({type: 'toggled', id: id, done: done});
}

    return (
        <label>
            <input type="checkbox" checked={item.done} onChange={(e) => handleToggleTodo(item.id,e.target.checked)} />
            <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
            <button key={item.id} onClick={() => handleDeleteItem(item.id)}>
                <span> [X]</span> 
            </button>
        </label>
    )
});


export default TodoItem;