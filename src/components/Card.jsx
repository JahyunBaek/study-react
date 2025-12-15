import { useContext } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

export default function Card({ title, children }) {
    const {darkMode, handleToggleDarkMode} = useContext(DarkModeContext);
    return (
      <div className={`card ${darkMode ? 'card--dark' : 'card--light'}`}>
        <div className="card__header">{title}</div>
        <div className="card__body">
          {children}
        </div>
      </div>
    )
  }