import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
//import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(      // THis basically acess the route div from index.html and render whatever is there in App.jsx as it is being imported here
  <StrictMode>
    <App />
  </StrictMode>,
)
