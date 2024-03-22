import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>from custom App $$</h1>
        </div>
    )
}
const CustomElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children : "add me to an element"
}
const newElement = (
    <a href="https://www.google.com" target='_blank'>click to visist google once</a>
)
ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    newElement 
    
)
