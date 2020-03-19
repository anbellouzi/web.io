
function getComponent(element) {
    result = 'none';

    fetch(`https://bootstrap-api.herokuapp.com/components/${element}`)
      .then(response => {
        return response.json()
      })
      .then(component => {
        result = component.component[0].html;
        // console.log(result);
        // return result;
        addComponent(result, element);
      });
}


function getComponentsList() {
  result = 'none';

  fetch(`https://bootstrap-api.herokuapp.com/components`)
    .then(response => {
      return response.json()
    })
    .then(components => {
      setElementDic(components['list components'])
    });
}

getComponentsList();