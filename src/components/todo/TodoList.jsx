import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem"; 
import { TodoContext } from "../../context/TodoContext";
const TodoList = () => {
    //const items = [...todos];
    //items.push({id :2, text:'포트폴리오 사이트 만들기'});
    const todos = useContext(TodoContext);
    const [isDone, setIsDone] = useState(false);
    const getFilterdTodos = () => {
        if(!isDone){
            return todos;
        }
        return todos.filter((todo) => todo.done);
    }
    const filteredTodos = getFilterdTodos();

    const getStatsCount = () => {
        console.log('getStatsCount');
        const totalCount = todos.length;
        const doneCount = todos.filter(item => item.done).length;
        return {totalCount,doneCount};
    }
    

    const {totalCount,doneCount} = useMemo(() => {
        return getStatsCount();
    }, [todos]);

    return (
        <>
        <div>
            <input id="isDone" type="checkBox"
            checked={isDone} onChange={(e) => setIsDone(e.target.checked)}></input>
            <label htmlFor="isDone">완료된 항목 보기({doneCount}/{totalCount})</label>
        </div>
        <ul>
            {
                filteredTodos.map(item =>(
                    <li key={item.id}>
                        <TodoItem item={item} />
                    </li>
                ))
               
            }
           
        </ul>
        </>
    )
}

export default TodoList;