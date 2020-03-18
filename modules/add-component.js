function addComponent(component, element) {
    // console.log(api_component)
    console.log(component)
    if (component == "none") {
        speak(`${element} was not found inside bootstrap a.p.i`)
    }
    else {
        wrapperChildren.add(component)
    }
}