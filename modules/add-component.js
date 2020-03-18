function addComponent(component, element) {
    if (component == "none") {
        speak(`${element} was not found inside bootstrap a.p.i`)
    }
    else {
        wrapperChildren.add(component)
    }
}