
function createElement(customElement,mainContainer){
    /*
    const element=document.createElement(customElement.type)
    element.innerHTML = customElement.children
    element.setAttribute('href',customElement.props.href)
    element.setAttribute('target',customElement.props.target)

    mainContainer.appendChild(element);
    */
   const element = document.createElement(customElement.type)
   element.innerHTML = customElement.children
   for (const prop in customElement.props) {
        if(prop === 'children') 
            continue
        element.setAttribute(prop,customElement.props[prop])
    }
    mainContainer.appendChild(element)
}
const customElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children : "add me to an element"
}

const mainContainer = document.querySelector('#root')

createElement(customElement,mainContainer);