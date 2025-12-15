import { createContext } from "react";
import { useState } from "react";
export const DarkModeContext = createContext();
//전역 상태 공유
//앱 전체 상태 ex ) 테마, 로그인계정 정보, 라우팅, 상태괸리 등
export const DarkModeProvider = ({children, initDarkMode = true}) => {
    const [darkMode, setDarkMode] = useState(initDarkMode);
    const handleToggleDarkMode = () =>{
      setDarkMode(!darkMode)
    } 

    return (
        <DarkModeContext.Provider value={{darkMode, handleToggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}