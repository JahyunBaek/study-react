import { useContext } from "react";
import TodoItem from "./TodoItem"; 
import { TodoContext } from "../../context/TodoContext";
const TodoList = () => {
    //const items = [...todos];
    //items.push({id :2, text:'포트폴리오 사이트 만들기'});
    const todos = useContext(TodoContext);
    return (
        <ul>
            {
                todos.map(item =>(
                    <li key={item.id}>
                        <TodoItem item={item} />
                    </li>
                ))
               
            }
           
        </ul>
    )
}

export default TodoList;