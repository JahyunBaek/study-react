import { createContext, useContext, useState } from "react";
import { useImmerReducer } from "use-immer";
import todoReducer from "../reducer/todo-reducer";

export const TodoContext = createContext(null); //todos
export const TodoDispatchContext = createContext(null); //dispactch
export const TodoContextProvider = ({children}) => {
    const [todos,dispatch] = useImmerReducer(todoReducer, [
        {id:0,text:'개발공부하기',done: false},
        {id:1,text:'JAVA공부',done: false}
    ]);
    
    return (
        <TodoContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={dispatch}>
            {children}
        </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    )
}

export const useTodos = () => {
    return useContext(TodoContext);
}
export const useDispatch = () => {
    return useContext(TodoDispatchContext);
}