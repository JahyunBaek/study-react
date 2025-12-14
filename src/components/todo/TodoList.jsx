const TodoList = ({todos=[], onDeleteItem,onToggleTodo}) => {
    //const items = [...todos];
    //items.push({id :2, text:'포트폴리오 사이트 만들기'});

    return (
        <ul>
            {
                todos.map(item =>(
                    <li key={item.id}>
                    <input type="checkbox" checked={item.done} onChange={(e) => onToggleTodo(item.id,e.target.checked)} />
                    <span>{item.done ? (<del>{item.text}</del>) : item.text}</span>
                    <button key={item.id} onClick={() => onDeleteItem(item.id)}>
                       <span> [X]</span> 
                    </button>
                    </li>
                ))
               
            }
           
        </ul>
    )
}

export default TodoList;