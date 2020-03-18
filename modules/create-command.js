function create(elementArr) {
    const element = elementArr[0]
    const bootstrapColor = elementArr[1]
    const text = elementArr[2]
  
    if (elementArr[1]) {
        speak(`Creating ${element} with color ${elementArr[1]}`)
    }
    else {
      speak(`Creating ${element}`)
    }
    
    // this should return html code from bootstrap api
    getComponent(element)
    
    
  }