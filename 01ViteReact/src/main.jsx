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
//we are defining the properties on our own here but using render function of react that's why it is not working
const CustomElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children : "add me to an element"
}
//it will work as react render method 
const newElement = (
    <a href="https://www.google.com" target='_blank'>click to visist google once</a>
)
//how react creates method
const reactElement = React.createElement(
    'h1',
    {href:'https://www.google.com',target:'_blank'},
    "Click here to visit google"
)
ReactDOM.createRoot(document.getElementById('root'))
.render(
  
    reactElement
    
)
