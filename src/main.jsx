import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './AppRef'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode 는 개발중에 컴포넌트에서 일반적인 버그를 빠르게 찾을 수 있도록 합니다. 렌더링을 한번  더 함.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
