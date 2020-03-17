function remove(elementArr) {
    var element = elementArr[0]
    const text = elementArr[2]
    var elementExist = true;
  
    console.log(`Removing ${element}`)
  
    speak(`Removing ${element} tag`)
  
    // TODO:
    // change for loop to get one element only then remove
    for (var i=0; i< wrapperChildren.models.length; i++) {
      var model = wrapperChildren.models[i]
      if ((element == model.attributes.tagName) || (elementArr[0] == model.attributes.type)) {
        wrapperChildren.remove(model);
      }
      else {
        elementExist = false
      }
    }
  
    if (elementExist == false) {
      speak(`There is no ${element} to remove`)
    }
  }