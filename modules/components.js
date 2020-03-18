
const colorsDic = {'red': 'text-danger', 'white': 'text-white', 'black': 'text-dark', 'blue': 'text-primary', 'yellow': true, 'grey': 'text-muted', 'gray': 'text-secondary', 'green': 'text-success', 'light blue': 'text-info', 'light white': 'text-light'}

// commandsDic: {element: tagName}
const elementsDic = {}


function setElementDic(components) {
    // console.log(components)

    components.forEach(element => {
        // console.log(element.name)
        // console.log(element.html)

        elementsDic[element.name] = element.html

        // console.log(elementsDic)
    });
}




