const todoReducer = (todos, action) => {
    switch(action.type){
        case 'added':{
            const {nextId,todoText} = action;
            return [
                ...todos,
                {
                    id: nextId,
                    text: todoText,
                    done: false
                }
            ]
        }
        case 'added-index':{
            const {nextId,todoText,insertAt} = action;
            return [
                //사입지점 이전 항목
                ...todos.slice(0,insertAt),
                {id:nextId,text:todoText,done:false},
                ...todos.slice(insertAt)
            ]
        }
        case 'deleted':{
            const {deleteId} = action;
            return todos.filter(item => item.id !== deleteId);
        }
        case 'toggled':{
            const {id,done} = action;
            return todos.map((item) => {
                if(item.id === id){
                 return {
                    ...item,
                    done
                 }
                }else{
                    return item;
                }
            })
        }
        case 'reversed':{
            return todos.toReversed();
        }
        default:{
            throw new Error('Unhandled action',action.type);
        }
            
    }
}

export default todoReducer;