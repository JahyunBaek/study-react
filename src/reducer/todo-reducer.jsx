const todoReducer = (draft, action) => {
    switch(action.type){
        case 'added':{
            const {nextId,todoText} = action;
            draft.push({
                id: nextId,
                text: todoText,
                done: false
            })
            break;
        }
        case 'added-index':{
            const {nextId,todoText,insertAt} = action;
            draft.splice(insertAt,0,{
                id:nextId,
                text:todoText,
                done:false
            })
            break;
        }
        case 'deleted':{
            const {deleteId} = action;
            return draft.filter(item => item.id !== deleteId);
        }
        case 'toggled':{
            const {id,done} = action;
            draft.find((item) => item.id === id).done = done;
            break;
        }
        case 'reversed':{
            return draft.toReversed();    
        }
        default:{
            throw new Error('Unhandled action',action.type);
        }
            
    }
}

export default todoReducer;